(() => {
  "use strict";
  const TRACKS = window.WahajAwardData.formTracks;
  const $ = (s) => document.querySelector(s),
    form = $("#participation-form");
  let current = 0,
    selected = null;
  let submitHandler = null,
    submitting = false;
  const evidenceByTrack = {},
    fileEvidence = {};

  function field(name) {
    return form.elements.namedItem(name);
  }

  function setEnabled(parent, on) {
    parent.hidden = !on;
    parent.querySelectorAll("input,select,textarea").forEach((e) => (e.disabled = !on));
  }

  function clearErrors() {
    form.querySelectorAll(".field-error").forEach((e) => e.remove());
    form.querySelectorAll("[aria-invalid]").forEach((e) => e.removeAttribute("aria-invalid"));
    $("#error-banner").hidden = true;
  }

  function snapshotCriteria() {
    if (!selected) return;
    evidenceByTrack[selected.id] = selected.criteria.map((_, i) => ({
      answer: field("criterion_" + i)?.value || "",
      links: [...document.querySelectorAll(`[data-links="${i}"] input`)].map((e) => e.value),
      files: fileEvidence[selected.id]?.[i] || [],
    }));
  }

  function renderTracks(domain) {
    snapshotCriteria();
    selected = null;
    $("#track-options").innerHTML = TRACKS.filter((t) => t.domain === domain)
      .map(
        (t) =>
          `<label class="track-card"><input type="radio" name="track" value="${t.id}"><span><b>${t.title}</b><small>${t.description}</small><span class="track-tag">${t.tag}</span></span></label>`,
      )
      .join("");
    $("#track-guidance").textContent = "اختر المسار لتعرف ما الذي تحتاج إلى تجهيزه";
    $("#side-selected").hidden = true;
    clearErrors();
  }

  function addLink(index, value = "") {
    const holder = document.querySelector(`[data-links="${index}"]`);
    if (holder.children.length >= 5) return;
    const row = document.createElement("div");
    row.className = "link-row";
    const input = document.createElement("input");
    input.type = "url";
    input.name = `evidence_${index}`;
    input.dir = "ltr";
    input.maxLength = 1000;
    input.placeholder = "https://...";
    input.setAttribute("aria-label", `رابط شاهد لمعيار ${selected.criteria[index][0]}`);
    input.value = value;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-link";
    remove.textContent = "×";
    remove.setAttribute("aria-label", "حذف رابط الشاهد");
    remove.onclick = () => {
      row.remove();
      updateLinkButton(index);
    };
    row.append(input, remove);
    holder.append(row);
    updateLinkButton(index);
  }

  function updateLinkButton(i) {
    const b = document.querySelector(`[data-add-link="${i}"]`);
    if (b) {
      b.disabled = document.querySelector(`[data-links="${i}"]`).children.length >= 5;
      b.textContent = b.disabled ? "الحد الأقصى 5 روابط" : "+ إضافة رابط شاهد";
    }
  }

  function selectTrack(id) {
    snapshotCriteria();
    selected = TRACKS.find((t) => t.id === id);
    $("#track-guidance").textContent = selected.guidance;
    $("#side-selected").hidden = false;
    $("#side-track").textContent = selected.title;
    const org = selected.domain === "organization",
      idea = id === "idea";
    setEnabled($("#organization-fields"), org);
    field("organizationName").required = org;
    field("organizationType").required = org;
    $("#name-label").textContent = org ? "اسم مسؤول المشاركة" : "الاسم الكامل";
    $("#identity-title").textContent = org
      ? "نتعرّف على الجهة ومسؤول المشاركة"
      : "نتعرّف عليك أولًا";
    setEnabled($("#execution-fields"), !idea);
    setEnabled($("#idea-fields"), idea);
    field("ideaAudience").required = idea;
    $("#entry-description").textContent = selected.guidance;
    $("#entry-eyebrow").textContent = idea ? "وصف الفكرة" : "وصف المشاركة";
    $("#criterion-count").textContent = `${selected.criteria.length} معايير · إجمالي الأوزان 100%`;
    $("#criteria-fields").innerHTML = selected.criteria
      .map(
        ([name, weight, q], i) =>
          `<details class="criterion-box" ${i === 0 ? "open" : ""}><summary><span>${i + 1} ${name}</span><span><span class="weight">${weight}%</span><span class="criterion-chevron">⌄</span></span></summary><div class="criterion-inner"><p class="criterion-question">${q}</p><label>توضيح المعيار <span>*</span><textarea name="criterion_${i}" required minlength="15" maxlength="2000" rows="3" placeholder="وضّح هذا الجانب من مشاركتك"></textarea></label><div class="links-label evidence-label">الشواهد <span>*</span></div><p class="evidence-help">أضف رابطًا أو ملف PDF أو صورة يلزم شاهد واحد على الأقل لهذا المعيار</p><div data-links="${i}"></div><div class="evidence-actions"><button type="button" class="add-link" data-add-link="${i}">+ إضافة رابط</button><button type="button" class="add-link" data-pick-pdf="${i}">إضافة ملف PDF</button><button type="button" class="add-link" data-pick-image="${i}">إضافة صورة</button></div><input type="file" data-file-kind="pdf" data-file-index="${i}" accept="application/pdf,.pdf" multiple hidden aria-label="إضافة ملفات PDF لمعيار ${name}"><input type="file" data-file-kind="image" data-file-index="${i}" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple hidden aria-label="إضافة صور لمعيار ${name}"><div class="evidence-file-list" data-files="${i}"></div><div class="attachment-status" data-file-status="${i}" aria-live="polite"></div><small class="evidence-limit">PDF أو JPG أو PNG أو WebP · حتى 5 ملفات لكل معيار · 10 ميجابايت للملف</small></div></details>`,
      )
      .join("");
    const saved = evidenceByTrack[id];
    selected.criteria.forEach((_, i) => {
      field("criterion_" + i).value = saved?.[i]?.answer || "";
      const links = saved?.[i]?.links || [""];
      links.forEach((v) => addLink(i, v));
      renderFiles(i);
    });
    field("accuracy").checked = false;
    field("rights").checked = false;
    clearErrors();
  }

  function error(el, message) {
    el.setAttribute("aria-invalid", "true");
    const note = document.createElement("small");
    note.className = "field-error";
    note.textContent = message;
    el.insertAdjacentElement("afterend", note);
  }

  function validStep() {
    clearErrors();
    if (current === 0 && !selected) {
      $("#error-banner").textContent = "اختر مسار المشاركة قبل الانتقال إلى الخطوة التالية";
      $("#error-banner").hidden = false;
      document.querySelector('[name="track"]')?.focus();
      return false;
    }
    let first = null;
    const section = form.querySelector(`[data-step="${current}"]`);
    for (const input of section.querySelectorAll("input,select,textarea")) {
      if (input.disabled || input.type === "radio" || input.type === "file") continue;
      const value = input.value.trim();
      let message = "";
      if (input.type === "checkbox") {
        if (input.required && !input.checked) message = "يرجى تأكيد هذا الإقرار";
      } else if (input.required && !value) message = "هذا الحقل مطلوب";
      else if (
        value &&
        input.name === "phone" &&
        !/^(05\d{8}|(?:\+?966|00966)5\d{8})$/.test(value.replace(/[\s()-]/g, ""))
      )
        message = "أدخل رقم جوال سعودي صحيحًا مثل 0512345678 أو +966512345678";
      else if (value && input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        message = "أدخل بريدًا إلكترونيًا صحيحًا";
      else if (value && input.type === "url") {
        try {
          const u = new URL(value);
          if (!["http:", "https:"].includes(u.protocol))
            message = "استخدم رابطًا يبدأ بـ https:// أو http://";
        } catch {
          message = "أدخل رابطًا كاملًا يبدأ بـ https://";
        }
      } else if (value && input.minLength > 0 && value.length < input.minLength)
        message = `اكتب ${input.minLength} أحرف على الأقل`;
      if (message) {
        error(input, message);
        if (!first) first = input;
      }
    }
    if (
      current === 2 &&
      selected.id !== "idea" &&
      field("endDate").value &&
      field("endDate").value < field("startDate").value
    ) {
      error(field("endDate"), "تاريخ النهاية يجب أن يكون بعد تاريخ البداية أو مساويًا له");
      first = first || field("endDate");
    }
    if (current === 2) {
      selected.criteria.forEach((_, i) => {
        const hasLink = [...document.querySelectorAll(`[data-links="${i}"] input`)].some((e) => {
          try {
            const u = new URL(e.value.trim());
            return ["http:", "https:"].includes(u.protocol);
          } catch {
            return false;
          }
        });
        if (!hasLink && !fileEvidence[selected.id]?.[i]?.length) {
          const area = field("criterion_" + i);
          error(area, "أضف شاهدًا واحدًا على الأقل: رابطًا صحيحًا أو ملف PDF أو صورة");
          first = first || area;
        }
      });
    }
    if (first) {
      first.closest("details")?.setAttribute("open", "");
      $("#error-banner").textContent = "راجع الحقول المحددة قبل المتابعة";
      $("#error-banner").hidden = false;
      first.focus();
      return false;
    }
    return true;
  }

  function scrollPane() {
    if (window.innerWidth < 761)
      $(".form-pane").scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
  }

  function showStep(number) {
    current = number;
    clearErrors();
    form
      .querySelectorAll("[data-step]")
      .forEach((s) => (s.hidden = Number(s.dataset.step) !== current));
    $("#step-label").textContent = `الخطوة ${current + 1} من 4`;
    $("#progress-percent").textContent = `${(current + 1) * 25}%`;
    $("#progress-fill").style.width = `${(current + 1) * 25}%`;
    $(".progress-track").setAttribute("aria-valuenow", (current + 1) * 25);
    document.querySelectorAll("[data-side]").forEach((e) => {
      const i = Number(e.dataset.side);
      e.classList.toggle("active", i === current);
      e.classList.toggle("done", i < current);
      e.querySelector(".step-number").textContent = i < current ? "✓" : i + 1;
    });
    $("#previous").hidden = current === 0;
    $("#next").innerHTML =
      current === 3 ? "إرسال المشاركة <span>←</span>" : "التالي <span>←</span>";
    if (current === 3) renderReview();
    syncSubmit();
    form.querySelector(`[data-step="${current}"] h2`).focus({ preventScroll: true });
    scrollPane();
  }

  function element(tag, text, cls) {
    const e = document.createElement(tag);
    if (text !== undefined) e.textContent = text;
    if (cls) e.className = cls;
    return e;
  }

  function reviewBlock(title, editStep) {
    const e = element("section", undefined, "review-block"),
      h = element("h3", title),
      b = element("button", "تعديل", "review-edit");
    b.type = "button";
    b.onclick = () => showStep(editStep);
    h.append(b);
    e.append(h);
    $("#review-content").append(e);
    return e;
  }

  function reviewRow(holder, title, value, full = false) {
    const dl = element("dl", undefined, full ? "review-full" : undefined);
    dl.append(element("dt", title), element("dd", value || "—"));
    holder.append(dl);
  }

  function renderReview() {
    snapshotCriteria();
    $("#review-content").replaceChildren();
    let b = reviewBlock("المجال والمسار", 0);
    reviewRow(b, "المجال", selected.domain === "individual" ? "الأفراد" : "المنظمات");
    reviewRow(b, "المسار", selected.title, true);
    b = reviewBlock("بيانات المتقدم", 1);
    let grid = element("div", undefined, "review-grid");
    b.append(grid);
    if (selected.domain === "organization") {
      reviewRow(grid, "المنظمة", field("organizationName").value);
      reviewRow(grid, "نوع المنظمة", field("organizationType").value);
      reviewRow(grid, "رقم الترخيص", field("license").value || "غير مذكور");
    }
    for (const [name, title] of [
      ["fullName", selected.domain === "organization" ? "مسؤول المشاركة" : "الاسم"],
      ["phone", "الجوال"],
      ["email", "البريد الإلكتروني"],
      ["region", "المنطقة"],
      ["city", "المدينة"],
    ])
      reviewRow(grid, title, field(name).value);
    b = reviewBlock("المشاركة والشواهد", 2);
    reviewRow(b, "عنوان المشاركة", field("entryTitle").value);
    reviewRow(b, "نبذة عن المشاركة", field("entrySummary").value, true);
    reviewRow(
      b,
      "الفئة المستفيدة",
      field(selected.id === "idea" ? "ideaAudience" : "audience").value,
      true,
    );
    if (selected.id !== "idea") {
      reviewRow(b, "بداية التنفيذ", field("startDate").value, true);
      reviewRow(b, "نهاية التنفيذ", field("endDate").value || "مستمرة", true);
    }
    const saved = evidenceByTrack[selected.id];
    selected.criteria.forEach(([title, weight], i) => {
      const row = element("div", undefined, "review-criterion");
      row.append(element("strong", `${title} · ${weight}%`), element("p", saved[i].answer));
      const links = saved[i].links.filter((s) => s.trim());
      const files = saved[i].files || [];
      if (!links.length && !files.length) row.append(element("p", "لم تضف شواهد لهذا المعيار"));
      for (const file of files) {
        const item = element("div", undefined, "review-file");
        item.append(
          element("span", file.type === "application/pdf" ? "PDF" : "صورة", "file-type"),
          element("span", file.name),
          element("small", formatSize(file.size)),
        );
        row.append(item);
      }
      for (const url of links) {
        try {
          const parsed = new URL(url.trim());
          if (!["https:", "http:"].includes(parsed.protocol)) continue;
          const a = element("a", url.trim());
          a.href = parsed.href;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          row.append(a);
        } catch {}
      }
      b.append(row);
    });
  }

  form
    .querySelectorAll('[name="domain"]')
    .forEach((i) => i.addEventListener("change", () => renderTracks(i.value)));
  $("#track-options").addEventListener("change", (e) => {
    if (e.target.name === "track") selectTrack(e.target.value);
  });
  $("#criteria-fields").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add-link]");
    if (b) {
      const i = Number(b.dataset.addLink);
      addLink(i);
      document.querySelector(`[data-links="${i}"] .link-row:last-child input`)?.focus();
    }
  });
  function submissionData() {
    snapshotCriteria();
    const formData = new FormData(form);
    selected.criteria.forEach((_, index) => {
      const evidence = evidenceByTrack[selected.id][index];
      formData.delete(`evidence_${index}`);
      evidence.links.forEach((link) => {
        if (link.trim()) formData.append(`evidence_${index}[]`, link.trim());
      });
      evidence.files.forEach((file) => formData.append(`files_${index}[]`, file, file.name));
    });
    return { formData, domain: selected.domain, trackId: selected.id };
  }

  function showCompletion(sent) {
    $("#completion-label").textContent = sent ? "تم الإرسال" : "المشاركة غير مرسلة";
    $("#completion-title").textContent = sent ? "تم إرسال مشاركتك بنجاح" : "تعذر إرسال مشاركتك";
    $("#completion-message").textContent = sent
      ? "شكرًا لمشاركتك في جائزة وهج القرائية"
      : "خدمة إرسال المشاركات غير متاحة حاليًا";
    $("#completion-note").textContent = sent
      ? "ستتم مراجعة مشاركتك والتواصل معك عند الحاجة إلى معلومات إضافية"
      : "لم يتم إرسال مشاركتك أو حفظها لدى الجمعية يمكنك الرجوع لمراجعتها والمحاولة لاحقًا قبل إغلاق الصفحة";
    $("#demo-complete .completion-icon").textContent = sent ? "✓" : "!";
    $("#edit-review").hidden = sent;
    form.hidden = true;
    $("#demo-complete").hidden = false;
    $("#complete-track").textContent = selected.title;
    $("#completion-title").focus({ preventScroll: true });
    scrollPane();
  }

  $("#next").addEventListener("click", async () => {
    if (submitting || $("#next").disabled || !validStep()) return;
    if (current < 3) {
      showStep(current + 1);
      return;
    }
    if (!submitHandler) {
      showCompletion(false);
      return;
    }
    submitting = true;
    try {
      const data = submissionData();
      form.inert = true;
      form.setAttribute("aria-busy", "true");
      syncSubmit();
      $("#next").textContent = "جار إرسال المشاركة";
      const result = await submitHandler(data);
      if (result?.success !== true) throw new Error("Submission was not confirmed");
      showCompletion(true);
    } catch {
      $("#error-banner").textContent =
        "تعذر تأكيد إرسال مشاركتك بياناتك ما زالت موجودة في هذه الصفحة راجع اتصالك وحاول مرة أخرى";
      $("#error-banner").hidden = false;
      $("#error-banner").setAttribute("tabindex", "-1");
      form.inert = false;
      $("#error-banner").focus({ preventScroll: true });
      scrollPane();
    } finally {
      submitting = false;
      form.inert = false;
      form.removeAttribute("aria-busy");
      $("#next").innerHTML = "إرسال المشاركة <span>←</span>";
      syncSubmit();
    }
  });
  $("#previous").onclick = () => showStep(current - 1);
  form.addEventListener("submit", (e) => e.preventDefault());
  form.addEventListener("input", (e) => {
    if (e.target.name === "entrySummary") $("#summary-count").textContent = e.target.value.length;
    if (e.target.hasAttribute("aria-invalid")) {
      e.target.removeAttribute("aria-invalid");
      e.target.nextElementSibling?.classList.contains("field-error") &&
        e.target.nextElementSibling.remove();
    }
  });
  $("#edit-review").onclick = () => {
    form.hidden = false;
    $("#demo-complete").hidden = true;
    showStep(3);
  };
  $("#restart").onclick = () => {
    form.reset();
    for (const key of Object.keys(evidenceByTrack)) delete evidenceByTrack[key];
    for (const key of Object.keys(fileEvidence)) delete fileEvidence[key];
    selected = null;
    $("#criteria-fields").replaceChildren();
    $("#summary-count").textContent = "0";
    form.hidden = false;
    $("#demo-complete").hidden = true;
    renderTracks("individual");
    showStep(0);
  };
  renderTracks("individual");
  setEnabled($("#organization-fields"), false);
  setEnabled($("#idea-fields"), false);

  function syncSubmit() {
    const disabled =
      submitting || (current === 3 && !(field("accuracy").checked && field("rights").checked));
    $("#next").disabled = disabled;
    $("#next").setAttribute("aria-disabled", String(disabled));
    $("#next").title = submitting
      ? "جار إرسال المشاركة"
      : disabled
        ? "حدد الإقرارين لتفعيل الإرسال"
        : "";
    const hint = $("#acknowledgement-hint");
    if (hint) hint.hidden = current !== 3 || !disabled;
  }

  form.addEventListener("change", syncSubmit);
  form.addEventListener("input", syncSubmit);
  syncSubmit();

  function formatSize(size) {
    return size >= 1048576
      ? (size / 1048576).toFixed(1) + " ميجابايت"
      : Math.max(1, Math.round(size / 1024)) + " كيلوبايت";
  }

  function renderFiles(index) {
    const holder = document.querySelector(`[data-files="${index}"]`);
    if (!holder) return;
    holder.replaceChildren();
    const files = fileEvidence[selected.id]?.[index] || [];
    files.forEach((file, pos) => {
      const row = element("div", undefined, "evidence-file");
      const info = element("div", undefined, "evidence-file-info");
      info.append(element("span", file.type === "application/pdf" ? "PDF" : "صورة", "file-type"));
      const text = element("div");
      text.append(element("b", file.name), element("small", formatSize(file.size)));
      info.append(text);
      const remove = element("button", "×", "remove-file");
      remove.type = "button";
      remove.setAttribute("aria-label", "حذف الملف " + file.name);
      remove.onclick = () => {
        files.splice(pos, 1);
        renderFiles(index);
        snapshotCriteria();
      };
      row.append(info, remove);
      holder.append(row);
    });
  }

  function acceptFiles(index, kind, input) {
    const status = document.querySelector(`[data-file-status="${index}"]`);
    status.replaceChildren();
    fileEvidence[selected.id] ||= [];
    fileEvidence[selected.id][index] ||= [];
    const list = fileEvidence[selected.id][index];
    for (const file of input.files) {
      let message = "";
      const name = file.name.toLowerCase();
      const pdf = file.type === "application/pdf" && name.endsWith(".pdf");
      const image =
        (file.type === "image/jpeg" && /\.jpe?g$/.test(name)) ||
        (file.type === "image/png" && name.endsWith(".png")) ||
        (file.type === "image/webp" && name.endsWith(".webp"));
      if (!(kind === "pdf" ? pdf : image))
        message = kind === "pdf" ? "اختر ملف PDF صالحًا" : "اختر صورة JPG أو PNG أو WebP";
      else if (!file.size) message = "الملف فارغ اختر ملفًا يحتوي على بيانات";
      else if (file.size > 10 * 1048576) message = "حجم الملف يتجاوز 10 ميجابايت";
      else if (list.length >= 5) message = "يمكن إضافة 5 ملفات فقط لكل معيار";
      else if (
        list.some(
          (f) =>
            f.name === file.name && f.size === file.size && f.lastModified === file.lastModified,
        )
      )
        message = "هذا الملف مضاف بالفعل";
      if (message) status.append(element("span", file.name + ": " + message, "field-error"));
      else list.push(file);
    }
    input.value = "";
    renderFiles(index);
    snapshotCriteria();
  }

  $("#criteria-fields").addEventListener("click", (e) => {
    const pdf = e.target.closest("[data-pick-pdf]"),
      img = e.target.closest("[data-pick-image]");
    if (pdf || img) {
      const index = (pdf || img).dataset[pdf ? "pickPdf" : "pickImage"];
      document
        .querySelector(`[data-file-kind="${pdf ? "pdf" : "image"}"][data-file-index="${index}"]`)
        .click();
    }
  });
  $("#criteria-fields").addEventListener("change", (e) => {
    if (e.target.matches("[data-file-kind]"))
      acceptFiles(Number(e.target.dataset.fileIndex), e.target.dataset.fileKind, e.target);
  });

  window.WahajParticipation = {
    // Register the PHP adapter after this script loads. Return { success: true }
    // only after the server confirms saving. formData includes evidence_N[] and files_N[].
    setSubmitHandler(handler) {
      if (handler !== null && typeof handler !== "function") {
        throw new TypeError("The submission handler must be a function or null");
      }
      if (submitting) throw new Error("Cannot change the handler during submission");
      submitHandler = handler;
    },
    selectTrack(id) {
      const t = TRACKS.find((t) => t.id === id);
      if (!t) return;
      if (current !== 0) return;
      const radio = form.querySelector(`[name="domain"][value="${t.domain}"]`);
      if (radio && !radio.checked) {
        radio.checked = true;
        renderTracks(t.domain);
      }
      const target = form.querySelector(`[name="track"][value="${id}"]`);
      if (target) {
        target.checked = true;
        selectTrack(id);
      }
    },
  };
})();
