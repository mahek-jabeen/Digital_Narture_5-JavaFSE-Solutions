/**
 * =============================================================================
 * CommunityHub — Local Community Event Portal
 * Phase 3: JavaScript — main.js
 * Cognizant Digital Nurture 5.0 | Module 1
 * =============================================================================
 *
 * JS EXERCISE 13 — DEBUGGING & TESTING
 * HOW TO USE THE CHROME CONSOLE:
 *   1. Open DevTools:  F12  (or right-click → Inspect)
 *   2. Go to the "Console" tab to see all console.log / warn / error output.
 *   3. In the "Sources" tab, open main.js and click a line number to set a breakpoint.
 *   4. Reload the page — execution pauses at every breakpoint so you can
 *      inspect variable values in the Scope panel on the right.
 *   5. In the "Network" tab, filter by "Fetch/XHR" to inspect all fetch() requests.
 *      Click any request row to see headers, payload, and the raw response.
 *
 * HOW TO INSPECT VARIABLES AT RUNTIME:
 *   - In the Console, type any variable name (e.g. eventsData, registrationCount)
 *     and press Enter to inspect its current value.
 *   - Use console.table(eventsData) for a nicely formatted array table.
 *
 * EXAMPLE BREAKPOINT:  search for "// 🔴 BREAKPOINT" comments below.
 * =============================================================================
 */

/* ============================================================================
   JS EXERCISE 1 — JavaScript Basics & Setup
   • console.log welcome message
   • DOMContentLoaded initialization
   ============================================================================ */

// Basic console greeting — Exercise 1
console.log("Welcome to the Community Portal");
console.log("%c🏙 CommunityHub JS Loaded", "color:#2563eb;font-weight:bold;font-size:14px;");

/* ============================================================================
   JS EXERCISE 2 — Syntax, Data Types, and Operators  (ES6+ — Exercise 10)
   • const / let
   • template literals
   • seat tracking
   ============================================================================ */

// JS Exercise 10: const / let
const PORTAL_NAME    = "CommunityHub";
const PORTAL_CITY    = "Hyderabad";
let   registrationCount = 0;          // mutable — tracks total registrations

// JS Exercise 2: data for display
const eventName  = "Jazz Under the Stars";
const eventDate  = "June 15, 2025";
let   availableSeats = 120;

// JS Exercise 10: template literal
console.log(`📋 Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`);

// Seat increment / decrement utilities (Exercise 2)
const incrementSeats = () => { availableSeats++; console.log(`➕ Seats incremented → ${availableSeats}`); };
const decrementSeats = () => { availableSeats > 0 ? availableSeats-- : console.warn("⚠ No seats left!"); };

/* ============================================================================
   JS EXERCISE 5 — Objects and Prototypes
   • class Event with id, name, category, date, seats
   • checkAvailability() method
   • prototype method
   • Object.entries() display
   ============================================================================ */

class Event {
  constructor(id, name, category, date, seats, price, location, img) {
    this.id       = id;
    this.name     = name;
    this.category = category;
    this.date     = date;           // ISO string for comparison
    this.seats    = seats;
    this.price    = price;
    this.location = location;
    this.img      = img;
  }

  // Method: checkAvailability
  checkAvailability() {
    return this.seats > 0;
  }

  // Method: formatted price string
  formattedPrice() {
    return this.price === 0 ? "Free" : `₹${this.price}`;
  }

  // Method: is event in the future?
  isFuture() {
    return new Date(this.date) >= new Date();
  }
}

// Prototype method — Exercise 5
Event.prototype.getSummary = function () {
  return `[${this.category}] ${this.name} on ${this.date} — ${this.seats} seats (${this.formattedPrice()})`;
};

/* ============================================================================
   JS EXERCISE 6 — Arrays and Methods
   • push(), filter(), map(), find(), some()
   ============================================================================ */

// Master event list — Exercise 6 array
const eventsData = [
  new Event(1, "Jazz Under the Stars",  "Music",   "2025-06-15", 120, 499, "Jubilee Hills",  "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=600&q=80"),
  new Event(2, "Startup Pitch Fest",    "Tech",    "2025-06-21", 300, 0,   "HITEC City",     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"),
  new Event(3, "Heritage Cultural Fest","Culture", "2025-06-28", 200, 199, "Charminar",      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"),
  new Event(4, "Street Food Carnival",  "Food",    "2025-07-05", 500, 299, "Banjara Hills",  "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80"),
  new Event(5, "Sunrise Wellness Retreat","Wellness","2025-07-12",80, 149, "Golconda",       "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80"),
  new Event(6, "Kids Art & Craft Fair", "Culture", "2025-07-19", 150, 99,  "Necklace Road",  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80"),
  new Event(7, "Green City Drive",      "Wellness","2025-08-02", 0,   0,   "KBR Park",       "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"),
];

// Log prototype summary for first event
console.log("Event summary:", eventsData[0].getSummary());

// Object.entries() demo — Exercise 5
console.log("📦 Event properties (Object.entries):");
Object.entries(eventsData[0]).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

// push() — add a new event dynamically
const addEvent = (eventObj) => {
  eventsData.push(eventObj);
  console.log(`✅ Event added: "${eventObj.name}". Total: ${eventsData.length}`);
  renderDashboard();
  renderEventCards(getFilteredEvents());
};

// filter() — music events
const getMusicEvents   = () => eventsData.filter(e => e.category === "Music");
// filter() — available events
const getAvailableEvents = () => eventsData.filter(e => e.checkAvailability());
// filter() — future events only
const getFutureEvents  = () => eventsData.filter(e => e.isFuture());

// map() — formatted title list
const getEventTitles = () => eventsData.map(e => `${e.name} (${e.category})`);

// find() — by id
const findEventById = (id) => eventsData.find(e => e.id === id);

// some() — any free events?
const hasFreeEvents = () => eventsData.some(e => e.price === 0);

// spread operator — clone array (Exercise 10)
const eventsSnapshot = [...eventsData];

console.log("🎵 Music events:", getMusicEvents().map(e => e.name));
console.log("🆓 Free events exist?", hasFreeEvents());
console.log("📋 All titles:", getEventTitles());

/* ============================================================================
   JS EXERCISE 4 — Functions, Scope, Closures, and HOF
   • addEvent()
   • registerUser()
   • filterEventsByCategory()
   • closure for registration counter
   • callback / HOF
   ============================================================================ */

// Closure — tracks total registrations privately
const makeRegistrationCounter = () => {
  let count = 0;                          // private variable via closure
  return {
    increment : () => { count++; return count; },
    decrement : () => { count = Math.max(0, count - 1); return count; },
    get       : () => count,
    reset     : () => { count = 0; }
  };
};

const regCounter = makeRegistrationCounter();  // closure instance

// Higher-order function — apply callback to each event
const forEachEvent = (callback) => eventsData.forEach(callback);

// Filter events by category (Exercise 4)
const filterEventsByCategory = (category) => {
  if (category === "All") return [...eventsData];
  return eventsData.filter(e => e.category === category);
};

// Register user — Exercise 4
const registerUser = ({ name, email, eventId }) => {
  const event = findEventById(eventId);
  if (!event) throw new Error(`Event ID ${eventId} not found.`);
  if (!event.checkAvailability()) throw new Error(`"${event.name}" is sold out.`);
  event.seats--;
  registrationCount = regCounter.increment();
  console.log(`✅ Registered: ${name} → "${event.name}" (${event.seats} seats left)`);
  return { success: true, event, registrationCount };
};

/* ============================================================================
   JS EXERCISE 3 — Conditionals, Loops, Error Handling
   • if/else validation
   • forEach display
   • try/catch
   ============================================================================ */

// Determine seat status label
const getSeatStatus = (seats) => {
  if (seats === 0)    return { label: "Sold Out",   cls: "status-err"  };
  if (seats < 20)     return { label: "Almost Full",cls: "status-err"  };
  if (seats < 50)     return { label: "Filling Fast",cls:"status-info" };
  return               { label: "Available",        cls: "status-ok"   };
};

// forEach loop — log all event summaries (Exercise 3)
console.log("📋 All Events:");
forEachEvent(e => console.log(`  • ${e.getSummary()}`));

// try/catch example (Exercise 3)
const safeRegister = (payload) => {
  try {
    // 🔴 BREAKPOINT — set here in DevTools Sources tab to inspect payload
    const result = registerUser(payload);
    showToast(`✅ Registered for "${result.event.name}"!`, "success");
    renderDashboard();
    renderEventCards(getFilteredEvents());
    return result;
  } catch (err) {
    // User-friendly error message
    console.error("❌ Registration error:", err.message);
    showToast(`❌ ${err.message}`, "error");
    return { success: false, error: err.message };
  }
};

/* ============================================================================
   JS EXERCISE 7 — DOM Manipulation
   • querySelector / querySelectorAll / getElementById
   • createElement / appendChild / innerHTML
   • Dynamic event card rendering
   ============================================================================ */

// Build one event card element — uses createElement, appendChild
const createEventCardElement = (event) => {
  const { name, category, date, seats, location, img, id } = event;  // destructuring (Ex 10)
  const { label, cls } = getSeatStatus(seats);

  const article = document.createElement("article");
  article.className = "card event-card reveal js-event-card";
  article.dataset.id       = id;
  article.dataset.category = category;

  // JS Exercise 10: template literal for innerHTML
  article.innerHTML = `
    <div style="position:relative;">
      <img class="event-img" src="${img}" alt="${name}" loading="lazy" />
      <span class="event-badge">${category}</span>
    </div>
    <div class="event-body">
      <div class="event-meta">
        <span>📅 ${new Date(date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</span>
        <span>📍 ${location}</span>
      </div>
      <h3 class="event-title">${name}</h3>
      <p class="event-desc" style="margin-bottom:.75rem;">
        <span class="status-badge ${cls}" style="font-size:.72rem;">${label}</span>
        &nbsp;${seats} seats remaining
      </p>
      <div class="event-footer">
        <span class="event-price">${event.formattedPrice()}</span>
        <button
          class="btn btn-primary js-register-btn"
          data-id="${id}"
          style="padding:.5em 1.1em;font-size:.85rem;"
          ${seats === 0 ? "disabled" : ""}>
          ${seats === 0 ? "Sold Out" : "Register"}
        </button>
      </div>
    </div>`;

  // dblclick to enlarge image (Exercise 8)
  const img_el = article.querySelector(".event-img");
  img_el.addEventListener("dblclick", () => {
    img_el.style.height = img_el.style.height === "320px" ? "180px" : "320px";
    showToast("Double-clicked image to toggle size.", "info");
  });

  return article;
};

// Render all event cards into #js-events-grid (Exercise 7)
const renderEventCards = (events) => {
  const grid = document.getElementById("js-events-grid");
  if (!grid) return;
  grid.innerHTML = "";                                      // clear existing

  if (events.length === 0) {
    grid.innerHTML = `<p style="color:var(--gray-400);grid-column:1/-1;text-align:center;padding:2rem;">No events match your search.</p>`;
    return;
  }

  // JS Exercise 3: forEach loop + conditional hide sold-out / past events
  events.forEach(event => {
    // Exercise 3: hide expired events by default (show future only via toggle)
    const card = createEventCardElement(event);
    grid.appendChild(card);                               // appendChild

    // Scroll reveal re-trigger for newly added cards
    revealObserver.observe(card);
  });

  // Re-attach register button listeners after render (Exercise 8)
  attachRegisterListeners();
};

/* ============================================================================
   JS EXERCISE 8 — Event Handling
   • onclick (register buttons)
   • onchange (category filter)
   • keydown (live search)
   • blur (form validation)
   • dblclick (image — attached in createEventCardElement above)
   ============================================================================ */

// Attach onclick to all register buttons
const attachRegisterListeners = () => {
  document.querySelectorAll(".js-register-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id);
      // Pre-fill the registration form with selected event
      const regEventSelect = document.getElementById("reg-event");
      if (regEventSelect) {
        // Match by event name substring
        const event = findEventById(id);
        if (event) {
          // Find or create a matching option
          const opts = regEventSelect.options;
          for (let i = 0; i < opts.length; i++) {
            if (opts[i].text.toLowerCase().includes(event.category.toLowerCase())) {
              regEventSelect.selectedIndex = i;
              break;
            }
          }
          document.getElementById("section-ex5")?.scrollIntoView({ behavior: "smooth" });
          showToast(`📋 Registering for "${event.name}" — fill the form below!`, "info");
        }
      }
    });
  });
};

// onchange — category filter (Exercise 8)
const initCategoryFilter = () => {
  const select = document.getElementById("js-category-filter");
  if (!select) return;
  select.addEventListener("change", (e) => {
    const category = e.target.value;
    console.log(`🔽 Category filter changed: ${category}`);
    renderEventCards(filterEventsByCategory(category));
    updateActiveFilterBtn(category);
  });
};

// Filter buttons (visual active state)
const updateActiveFilterBtn = (category) => {
  document.querySelectorAll(".js-filter-btn").forEach(btn => {
    btn.classList.toggle("btn-primary", btn.dataset.category === category);
    btn.classList.toggle("btn-outline",  btn.dataset.category !== category);
  });
};

// keydown — live search (Exercise 8)
const initLiveSearch = () => {
  const input = document.getElementById("js-search-input");
  if (!input) return;
  input.addEventListener("keydown", (e) => {
    // Debounce: only run after short delay (using setTimeout — Exercise 12)
    clearTimeout(input._searchTimer);
    input._searchTimer = setTimeout(() => {
      const query = input.value.trim().toLowerCase();
      const results = eventsData.filter(ev =>
        ev.name.toLowerCase().includes(query) ||
        ev.category.toLowerCase().includes(query) ||
        ev.location.toLowerCase().includes(query)
      );
      console.log(`🔍 Search: "${query}" → ${results.length} results`);
      renderEventCards(results);
    }, 250);
  });
};

// blur — form field validation (Exercise 8)
const initFormBlurValidation = () => {
  // Name field
  document.getElementById("reg-name")?.addEventListener("blur", (e) => {
    const val = e.target.value.trim();
    setFieldError(e.target, val.length < 2 ? "Name must be at least 2 characters." : "");
  });
  // Email field
  document.getElementById("reg-email")?.addEventListener("blur", (e) => {
    const val = e.target.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    setFieldError(e.target, !val ? "Email is required." : !valid ? "Enter a valid email address." : "");
  });
  // Phone field
  document.getElementById("reg-phone")?.addEventListener("blur", (e) => {
    const val = e.target.value.replace(/\s+/g, "");
    const valid = /^(\+91)?[6-9]\d{9}$/.test(val);
    setFieldError(e.target, !val ? "Phone is required." : !valid ? "Enter a valid 10-digit Indian number." : "");
  });
};

// Helper: show/clear inline field error
const setFieldError = (input, msg) => {
  let errorEl = input.parentElement.querySelector(".js-field-error");
  if (!errorEl) {
    errorEl = document.createElement("span");
    errorEl.className = "js-field-error";
    errorEl.style.cssText = "color:var(--danger);font-size:.8rem;display:block;margin-top:.25rem;";
    input.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = msg;
  input.style.borderColor = msg ? "var(--danger)" : "";
};

/* ============================================================================
   JS EXERCISE 11 — Working with Forms
   • form.elements
   • event.preventDefault()
   • inline validation
   • success / error messages
   ============================================================================ */

const initRegistrationForm = () => {
  const form = document.getElementById("regForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();                                   // Exercise 11

    // Access fields via form.elements (Exercise 11)
    const elements    = form.elements;
    const name        = elements["reg-name"].value.trim();
    const email       = elements["reg-email"].value.trim();
    const phone       = elements["reg-phone"].value.trim();
    const date        = elements["reg-date"].value;
    const eventSelect = elements["reg-event"].value;

    // Inline validation (Exercise 11)
    let valid = true;
    if (!name)     { setFieldError(elements["reg-name"],  "Name is required.");          valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                   { setFieldError(elements["reg-email"], "Valid email is required.");   valid = false; }
    if (!phone || !/^(\+91)?[6-9]\d{9}$/.test(phone.replace(/\s+/g,"")))
                   { setFieldError(elements["reg-phone"], "Valid phone is required.");   valid = false; }
    if (!date)     { setFieldError(elements["reg-date"],  "Date is required.");          valid = false; }
    if (!eventSelect) { setFieldError(elements["reg-event"], "Please choose an event."); valid = false; }

    if (!valid) {
      showToast("⚠ Please fix the highlighted errors.", "error");
      return;
    }

    // Map select value to event id
    const categoryMap = { music:1, tech:2, culture:3, food:4, wellness:5 };
    const eventId     = categoryMap[eventSelect] || 1;

    // JS Exercise 12: simulate async POST submission
    await submitRegistration({ name, email, phone, date, eventId });
  });
};

/* ============================================================================
   JS EXERCISE 12 — AJAX & Fetch API
   • fetch() POST to jsonplaceholder
   • Loading / success / failure state
   • setTimeout for simulated delay
   ============================================================================ */

const submitRegistration = async ({ name, email, phone, date, eventId }) => {
  const btn = document.querySelector("#regForm [type=submit]");
  const originalText = btn ? btn.innerHTML : "";

  // Loading state
  if (btn) { btn.innerHTML = "⏳ Submitting…"; btn.disabled = true; }
  showToast("⏳ Submitting your registration…", "info");
  console.log("📡 Sending registration POST to jsonplaceholder…");

  // setTimeout simulates a server processing delay (Exercise 12)
  await new Promise(resolve => setTimeout(resolve, 800));

  try {
    // JS Exercise 12: fetch() POST request
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify({ title: name, body: `${email} | ${phone} | ${date}`, userId: eventId })
    });

    // 🔴 BREAKPOINT — inspect response object here
    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();
    console.log("✅ Server response:", data);

    // Attempt local registration (seat deduction)
    safeRegister({ name, email, eventId });

    // Success state (Exercise 12)
    showToast(`🎉 Registration confirmed! Welcome, ${name}!`, "success");
    document.getElementById("regForm")?.reset();

    // Show success message in form
    const successEl = document.getElementById("js-form-success");
    if (successEl) {
      successEl.innerHTML = `✅ <strong>${name}</strong>, you're registered! Confirmation sent to <em>${email}</em>.`;
      successEl.style.display = "block";
      setTimeout(() => { successEl.style.display = "none"; }, 5000);
    }

  } catch (err) {
    // Failure state (Exercise 12)
    console.error("❌ Fetch error:", err.message);
    showToast(`❌ Submission failed: ${err.message}`, "error");
  } finally {
    if (btn) { btn.innerHTML = originalText; btn.disabled = false; }
  }
};

/* ============================================================================
   JS EXERCISE 9 — Async JS, Promises, Async/Await
   • Loading spinner
   • fetch() from jsonplaceholder.typicode.com/users
   • .then() / .catch()
   • async function loadEvents()
   ============================================================================ */

// Promise example — Exercise 9
const waitPromise = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// .then() / .catch() style
const fetchUsersWithThen = () => {
  console.log("📡 [Promise .then()] Fetching users from jsonplaceholder…");
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then(users => {
      console.log(`✅ [.then()] Loaded ${users.length} users from API`);
      return users;
    })
    .catch(err => {
      console.error("❌ [.catch()] Error fetching users:", err.message);
      return [];
    });
};

// async / await style — Exercise 9
async function loadEvents() {
  const spinner = document.getElementById("js-async-spinner");
  const output  = document.getElementById("js-async-output");
  if (spinner) spinner.style.display = "flex";
  if (output)  output.innerHTML = "";

  console.log("🔄 [async/await] loadEvents() started…");

  try {
    await waitPromise(600);  // simulate network latency

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const users = await response.json();
    console.log(`✅ [async/await] Fetched ${users.length} users`);

    // Display in UI using DOM manipulation (Exercise 7)
    if (output) {
      output.innerHTML = users.slice(0, 6).map(u => `
        <div class="js-user-card">
          <strong>${u.name}</strong>
          <span>${u.email}</span>
          <span style="color:var(--gray-400);font-size:.78rem;">${u.address.city}</span>
        </div>`).join("");
    }

  } catch (err) {
    console.error("❌ loadEvents() error:", err.message);
    if (output) output.innerHTML = `<p style="color:var(--danger);">❌ Failed to load: ${err.message}</p>`;
  } finally {
    if (spinner) spinner.style.display = "none";
  }
}

/* ============================================================================
   JS EXERCISE 14 — jQuery
   • $('#registerBtn').click(...)
   • .fadeIn() / .fadeOut() on event cards
   • "Why React or Vue?" section
   ============================================================================ */

const initJQuery = () => {
  if (typeof $ === "undefined") {
    console.warn("⚠ jQuery not loaded — skipping jQuery exercise.");
    return;
  }

  console.log(`✅ jQuery ${$.fn.jquery} loaded`);

  // jQuery click handler on #js-jquery-register-btn
  $("#js-jquery-register-btn").click(function () {
    const name = $("#js-jquery-name").val().trim();
    if (!name) {
      $(this).closest(".js-jquery-demo").find(".js-jquery-msg")
        .text("⚠ Please enter your name first.")
        .css("color", "var(--danger)")
        .fadeIn(300);
      return;
    }
    $(this).closest(".js-jquery-demo").find(".js-jquery-msg")
      .text(`✅ Welcome, ${name}! Your seat is reserved.`)
      .css("color", "var(--success)")
      .fadeIn(400);
    console.log(`jQuery: registered "${name}"`);
  });

  // fadeOut all event cards, then fadeIn one by one
  $("#js-jquery-fade-btn").click(function () {
    $(".js-event-card").fadeOut(300, function () {
      $(".js-event-card").each(function (i) {
        $(this).delay(i * 100).fadeIn(400);
      });
    });
    showToast("jQuery fadeOut → fadeIn animation triggered!", "info");
  });

  // Animate dashboard stat numbers on scroll into view
  $(window).on("scroll.jq", function () {
    if ($("#js-dashboard").length && isInViewport(document.getElementById("js-dashboard"))) {
      $(window).off("scroll.jq");
      $(".js-stat-num").each(function () {
        const target = parseInt($(this).data("target")) || 0;
        $({ n: 0 }).animate({ n: target }, {
          duration: 900,
          step: function () { $(this).closest(".js-stat-num").text(Math.ceil(this.n)); },
          complete: function () { $(this).closest(".js-stat-num").text(target + ($(this).closest(".js-stat-num").data("suffix") || "")); }
        });
      });
    }
  });
};

/* ============================================================================
   TOAST NOTIFICATION SYSTEM
   ============================================================================ */

const showToast = (message, type = "info") => {
  const container = document.getElementById("js-toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `js-toast js-toast--${type}`;
  toast.innerHTML = `<span>${message}</span><button class="js-toast-close" aria-label="Close">×</button>`;

  container.appendChild(toast);

  // Auto-dismiss after 4 seconds
  const timer = setTimeout(() => dismissToast(toast), 4000);

  toast.querySelector(".js-toast-close").addEventListener("click", () => {
    clearTimeout(timer);
    dismissToast(toast);
  });

  console.log(`🔔 Toast [${type}]: ${message}`);
};

const dismissToast = (toast) => {
  toast.style.opacity = "0";
  toast.style.transform = "translateX(110%)";
  setTimeout(() => toast.remove(), 350);
};

/* ============================================================================
   DASHBOARD — Dynamic Statistics
   ============================================================================ */

const renderDashboard = () => {
  const totalEvents   = eventsData.length;
  const totalSeats    = eventsData.reduce((acc, e) => acc + e.seats, 0);
  const totalRegs     = regCounter.get();
  const availableCount = getAvailableEvents().length;

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("js-stat-total-events",   totalEvents);
  set("js-stat-total-regs",     totalRegs);
  set("js-stat-avail-seats",    totalSeats.toLocaleString("en-IN"));
  set("js-stat-avail-events",   availableCount);

  console.log(`📊 Dashboard updated — Events: ${totalEvents} | Regs: ${totalRegs} | Seats: ${totalSeats}`);
};

/* ============================================================================
   FILTER BAR BUTTON HANDLERS
   ============================================================================ */

const initFilterButtons = () => {
  document.querySelectorAll(".js-filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      renderEventCards(filterEventsByCategory(cat));
      updateActiveFilterBtn(cat);
      // Also sync the <select> filter
      const sel = document.getElementById("js-category-filter");
      if (sel) sel.value = cat;
    });
  });
};

/* ============================================================================
   HIDE FULL / HIDE EXPIRED TOGGLES — Exercise 3
   ============================================================================ */

let hideFull    = false;
let hideExpired = false;

const getFilteredEvents = () => {
  const cat = document.getElementById("js-category-filter")?.value || "All";
  let list  = filterEventsByCategory(cat);
  if (hideFull)    list = list.filter(e => e.checkAvailability());
  if (hideExpired) list = list.filter(e => e.isFuture());
  const q = document.getElementById("js-search-input")?.value.trim().toLowerCase();
  if (q) list = list.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.location.toLowerCase().includes(q)
  );
  return list;
};

const initToggleButtons = () => {
  document.getElementById("js-toggle-full")?.addEventListener("click", function () {
    hideFull = !hideFull;
    this.textContent = hideFull ? "Show Sold Out" : "Hide Sold Out";
    this.classList.toggle("btn-primary", hideFull);
    this.classList.toggle("btn-outline",  !hideFull);
    renderEventCards(getFilteredEvents());
  });

  document.getElementById("js-toggle-expired")?.addEventListener("click", function () {
    hideExpired = !hideExpired;
    this.textContent = hideExpired ? "Show Past Events" : "Hide Past Events";
    this.classList.toggle("btn-primary", hideExpired);
    this.classList.toggle("btn-outline",  !hideExpired);
    renderEventCards(getFilteredEvents());
  });
};

/* ============================================================================
   ADD EVENT FORM — Exercise 4 addEvent()
   ============================================================================ */

const initAddEventForm = () => {
  const form = document.getElementById("js-add-event-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const el   = form.elements;
    const name = el["ae-name"].value.trim();
    const cat  = el["ae-category"].value;
    const date = el["ae-date"].value;
    const seats= parseInt(el["ae-seats"].value) || 0;
    const price= parseInt(el["ae-price"].value) || 0;
    const loc  = el["ae-location"].value.trim();

    if (!name || !cat || !date || !loc) { showToast("⚠ Please fill all required fields.", "error"); return; }

    const newId = Math.max(...eventsData.map(e => e.id)) + 1;
    const newEvent = new Event(
      newId, name, cat, date, seats, price, loc,
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80"
    );

    addEvent(newEvent);
    showToast(`✅ "${name}" added to the portal!`, "success");
    form.reset();
  });
};

/* ============================================================================
   SCROLL REVEAL OBSERVER (shared with inline script)
   ============================================================================ */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

/* Active nav link tracking */
const initNavScroll = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => { if (window.scrollY >= sec.offsetTop - 80) current = sec.id; });
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }, { passive: true });
};

/* Hamburger menu */
const toggleMenu = () => {
  const links = document.querySelector(".nav-links");
  const cta   = document.querySelector(".nav-cta");
  if (!links) return;
  if (links.style.display === "flex") {
    links.style.display = "none";
    if (cta) cta.style.display = "none";
  } else {
    Object.assign(links.style, {
      display: "flex", flexDirection: "column", position: "absolute",
      top: "64px", left: "0", right: "0",
      background: "var(--blue-900)", padding: "1rem 2rem", zIndex: "999"
    });
    if (cta) cta.style.display = "none";
  }
};

/* Utility — viewport check for jQuery animation */
const isInViewport = (el) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

/* ============================================================================
   Existing Phase 1/2 helpers kept for backward-compatibility
   ============================================================================ */

const validatePhone = (input) => {
  const out = document.getElementById("phone-output");
  const val = input.value.replace(/\s+/g, "");
  if (/^(\+91)?[6-9]\d{9}$/.test(val)) {
    if (out) { out.textContent = "✅ Valid phone number."; out.style.color = "var(--success)"; }
    input.style.borderColor = "var(--success)";
  } else {
    if (out) { out.textContent = "❌ Enter a valid 10-digit number (e.g. +91 98765 43210)."; out.style.color = "var(--danger)"; }
    input.style.borderColor = "var(--danger)";
  }
};

const showEventFee = (sel) => {
  const out  = document.getElementById("fee-output");
  const fees = { music:"₹499 — Music Festival ticket", tech:"Free — No charge!", culture:"₹199 — Cultural Fest ticket", food:"₹299 — Food Carnival entry", wellness:"₹149 — Wellness Retreat" };
  if (out) out.textContent = sel.value ? `💳 Registration Fee: ${fees[sel.value] || ""}` : "";
};

const updateCounter = (el, counterId, max) => {
  const counter = document.getElementById(counterId);
  const len = el.value.length;
  if (counter) {
    counter.textContent = `${len} / ${max} characters`;
    counter.style.color = len > max * 0.85 ? "var(--danger)" : "var(--gray-400)";
  }
};

const ex6ValidatePhone = (input) => {
  const status = document.getElementById("ex6-phone-status");
  const val    = input.value.replace(/\s+/g, "");
  if (status) status.innerHTML = /^(\+91)?[6-9]\d{9}$/.test(val)
    ? `<span class="status-badge status-ok">✅ Valid Indian phone number</span>`
    : `<span class="status-badge status-err">❌ Invalid — use +91 XXXXXXXXXX</span>`;
};

const ex6ShowFee = (sel) => {
  const display = document.getElementById("ex6-fee-display");
  if (!display) return;
  if (!sel.value) { display.style.display = "none"; return; }
  const fee = parseInt(sel.value.split("|")[1]);
  display.textContent = fee === 0 ? "🎉 This event is FREE!" : `💳 Registration Fee: ₹${fee}`;
  display.style.display = "inline-block";
};

const ex6Confirm = () => {
  const name   = document.getElementById("ex6-name")?.value.trim();
  const status = document.getElementById("ex6-confirm-status");
  if (!name)  { if (status) status.innerHTML = `<span class="status-badge status-err">⚠ Enter your name first.</span>`; return; }
  if (confirm(`Confirm registration for: ${name}?`)) {
    if (status) status.innerHTML = `<span class="status-badge status-ok">✅ Confirmed! Welcome, ${name}!</span>`;
    showToast(`✅ Welcome, ${name}!`, "success");
  }
};

const toggleEnlarge = (img) => img.classList.toggle("big");

// Video handlers
const videoReady  = () => { const s = document.getElementById("video-status"); if (s) { s.textContent = "✅ Video ready — press Play to watch."; s.classList.add("ready"); } };
const videoPlay   = () => { const s = document.getElementById("video-status"); if (s) s.textContent = "▶ Playing…"; };
const videoPause  = () => { const s = document.getElementById("video-status"); if (s) s.textContent = "⏸ Paused."; };
const videoEnd    = () => { const s = document.getElementById("video-status"); if (s) s.textContent = "✅ Video ended. Thank you for watching!"; };

// localStorage helpers
const saveLocalStorage = () => {
  const category = document.getElementById("ls-event")?.value;
  const username = document.getElementById("ls-username")?.value.trim();
  if (!category || !username) { alert("⚠ Select a category and enter your name."); return; }
  localStorage.setItem("preferredCategory", category);
  localStorage.setItem("username", username);
  const d = document.getElementById("ls-display");
  if (d) d.textContent = `✅ Saved: "${username}" prefers "${category}" events.`;
  showToast("💾 Preferences saved!", "success");
};

const loadLocalStorage = () => {
  const category = localStorage.getItem("preferredCategory");
  const username = localStorage.getItem("username");
  const d        = document.getElementById("ls-display");
  if (category && username) {
    const lsE = document.getElementById("ls-event");
    const lsU = document.getElementById("ls-username");
    if (lsE) lsE.value = category;
    if (lsU) lsU.value = username;
    if (d)   d.textContent = `📂 Loaded: "${username}" — "${category}"`;
  } else {
    if (d) d.textContent = "⚠ No saved preference found.";
  }
};

const saveSessionStorage = () => {
  const timing = document.getElementById("ss-event")?.value;
  if (!timing) { alert("⚠ Please select a session preference."); return; }
  sessionStorage.setItem("eventTiming", timing);
  const d = document.getElementById("ss-display");
  if (d) d.textContent = `✅ Session saved: "${timing}" preference.`;
  showToast("⚡ Session preference saved!", "success");
};

const loadSessionStorage = () => {
  const timing = sessionStorage.getItem("eventTiming");
  const ssE = document.getElementById("ss-event");
  const d   = document.getElementById("ss-display");
  if (timing) {
    if (ssE) ssE.value = timing;
    if (d)   d.textContent = `📂 Loaded: Session preference — "${timing}"`;
  } else {
    if (d) d.textContent = "⚠ No session preference found.";
  }
};

const clearAllStorage = () => {
  if (!confirm("Clear all saved preferences?")) return;
  localStorage.clear(); sessionStorage.clear();
  ["ls-display","ss-display"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "🗑 Storage cleared.";
  });
  ["ls-event","ls-username","ss-event"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  showToast("🗑 All storage cleared.", "info");
  console.warn("⚠ All storage cleared by user.");
};

// Geolocation
const findNearbyEvents = () => {
  const result  = document.getElementById("geo-result");
  const mapLink = document.getElementById("geo-map-link");
  if (mapLink) mapLink.style.display = "none";
  if (!navigator.geolocation) {
    if (result) { result.innerHTML = "❌ Geolocation not supported."; result.className = "geo-result err"; }
    return;
  }
  if (result) { result.innerHTML = '<span class="geo-loader"></span> Detecting your location…'; result.className = "geo-result"; }
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const lat = coords.latitude.toFixed(6), lon = coords.longitude.toFixed(6), acc = Math.round(coords.accuracy);
      if (result) result.innerHTML = `✅ Found!<br/><strong>Lat:</strong> ${lat} | <strong>Lon:</strong> ${lon} | <strong>±${acc}m</strong>`;
      const gl = document.getElementById("geo-link");
      if (gl) { gl.href = `https://www.google.com/maps?q=${lat},${lon}`; }
      if (mapLink) mapLink.style.display = "block";
      showToast("📍 Location found! Map link updated.", "success");
    },
    (err) => {
      const msgs = { 1:"🚫 Permission denied.", 2:"📡 Location unavailable.", 3:"⏱ Timed out." };
      if (result) { result.innerHTML = msgs[err.code] || "❓ Unknown error."; result.className = "geo-result err"; }
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
};

// Debug helpers
const debugLog     = () => { console.log("%cℹ debugLog", "color:#3b82f6;font-weight:bold;", { url: window.location.href, events: eventsData.length }); alert("ℹ console.log() called! Open DevTools (F12) → Console."); };
const debugWarn    = () => { console.warn("⚠ debugWarn: localStorage quota may be full."); alert("⚠ console.warn() called!"); };
const debugError   = () => { console.error("✖ debugError: Simulated 404 Not Found"); alert("✖ console.error() called!"); };
const debugInspect = () => { const b = document.getElementById("welcomeBanner"); if (!b) return; b.style.outline = "4px dashed #f59e0b"; b.scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => { b.style.outline = ""; }, 3000); alert("🔍 #welcomeBanner highlighted! Right-click → Inspect."); };
const runDebuggable = () => { function debuggableFunction() { debugger; const x=42, y=x*2; console.log("%c✔ Result:", "color:#22c55e;", y); return y; } alert(`debuggableFunction() returned: ${debuggableFunction()}\n\nOpen DevTools (F12) before clicking to hit the breakpoint.`); };
const debugTable   = () => { console.log("%c📊 console.table — Events:", "color:#8b5cf6;font-weight:bold;"); console.table(eventsData); alert("📊 console.table() called! See Console (F12)."); };

const sendContactMessage = () => {
  const name  = document.getElementById("c-name")?.value.trim();
  const email = document.getElementById("c-email")?.value.trim();
  const msg   = document.getElementById("c-msg")?.value.trim();
  if (!name || !email || !msg) { alert("⚠ Please fill all contact fields."); return; }
  alert(`📨 Message sent!\nThank you, ${name}. We'll reply to ${email} shortly.`);
  ["c-name","c-email","c-msg"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  showToast("📨 Message sent! We'll be in touch.", "success");
  console.log("%c📨 Contact message:", "color:#2563eb;", { name, email });
};

/* ============================================================================
   JS EXERCISE 1 — DOMContentLoaded initialization
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOMContentLoaded — initialising CommunityHub JS…");

  // Exercise 1: alert when page fully loaded
  // (using a subtle toast instead of a blocking alert for better UX)
  setTimeout(() => showToast(`👋 Welcome to ${PORTAL_NAME}, ${PORTAL_CITY}!`, "info"), 600);

  // Render dynamic events section
  renderEventCards(getFilteredEvents());
  renderDashboard();

  // Init all interactive features
  initCategoryFilter();
  initFilterButtons();
  initLiveSearch();
  initFormBlurValidation();
  initRegistrationForm();
  initAddEventForm();
  initToggleButtons();
  initNavScroll();

  // Exercise 9: load async data on page load
  loadEvents();
  fetchUsersWithThen();

  // Exercise 14: jQuery
  initJQuery();

  // Scroll reveal for static cards
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  // Auto-load storage prefs
  loadLocalStorage();
  loadSessionStorage();

  // Exercise 2: display data-types demo in UI
  const demoEl = document.getElementById("js-ex2-output");
  if (demoEl) {
    demoEl.innerHTML = `
      <code>const eventName = <strong>"${eventName}"</strong></code><br/>
      <code>const eventDate = <strong>"${eventDate}"</strong></code><br/>
      <code>let availableSeats = <strong>${availableSeats}</strong></code><br/>
      <code>Template literal → <strong>"${eventName} on ${eventDate} — ${availableSeats} seats"</strong></code><br/>
      <code>registrationCount = <strong>${registrationCount}</strong></code>`;
  }

  // beforeunload warning
  window.addEventListener("beforeunload", (e) => { e.preventDefault(); e.returnValue = ""; });

  console.log("%c🚀 CommunityHub initialised successfully!", "color:#22c55e;font-weight:bold;");
  console.table(eventsData.map(e => ({ id: e.id, name: e.name, category: e.category, seats: e.seats, price: e.formattedPrice() })));
});