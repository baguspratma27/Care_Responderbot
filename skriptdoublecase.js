var CATEGORIES = [
  { name: "Account Problem",                group: "Akun",       keywords: ["akun","account","banned","account problem"] },
  { name: "Add Email",                      group: "Akun",       keywords: ["tambah email","add email","ganti email","ubah email"] },
  { name: "Add Phone Number",               group: "Akun",       keywords: ["tambah nomor","add phone","ganti nomor","change phone","change number","binding phone"] },
  { name: "Can't Login",                    group: "Akun",       keywords: ["ga bisa login","tidak bisa login","cant login","login gagal"] },
  { name: "Can't Login Bein Connect",       group: "Akun",       keywords: ["bein","bein connect"] },
  { name: "Can't Logout",                   group: "Akun",       keywords: ["ga bisa logout","tidak bisa logout"] },
  { name: "Can't Register",                 group: "Akun",       keywords: ["ga bisa daftar","register gagal"] },
  { name: "Delete Account",                 group: "Akun",       keywords: ["hapus akun","delete account"] },
  { name: "Delete SSO",                     group: "Akun",       keywords: ["hapus sso","delete sso"] },
  { name: "Forgot Password",                group: "Akun",       keywords: ["lupa password","forgot password"] },
  { name: "Reset Password",                 group: "Akun",       keywords: ["reset password","ganti password"] },
  { name: "Hack Account",                   group: "Akun",       keywords: ["hack","diretas","akun diambil"] },
  { name: "Suspend Account",                group: "Akun",       keywords: ["suspend akun","akun diblokir","akun disuspend","suspend account","open suspend","suspend","suspended","scoring","sharing","piracy"] },
  { name: "Reactivate Account",             group: "Akun",       keywords: ["reaktivasi akun","reactivate account"] },
  { name: "Verification Account",           group: "Akun",       keywords: ["verifikasi","verification"] },
  { name: "Forget Which Account With Subs", group: "Akun",       keywords: ["lupa akun","akun mana yang subscribe"] },
  { name: "Limit Device",                   group: "Akun",       keywords: ["limit device","batas perangkat"] },
  { name: "Clear Phone Number",             group: "Akun",       keywords: ["hapus nomor","clear phone"] },

  { name: "Bundling Advance",               group: "Bundling",   keywords: ["advance","bundling advance"] },
  { name: "Bundling Akari - Reactivation",  group: "Bundling",   keywords: ["akari reaktivasi","akari reactivation"] },
  { name: "Bundling Akari - Whitelist",     group: "Bundling",   keywords: ["akari whitelist","akari wl"] },
  { name: "Bundling Changhong - Reactivation",group: "Bundling", keywords: ["changhong reaktivasi","changhong reactivation"] },
  { name: "Bundling Changhong - Whitelist", group: "Bundling",   keywords: ["changhong whitelist","changhong wl"] },
  { name: "Bundling Changhong - Activation",group: "Bundling",   keywords: ["changhong aktivasi","changhong activation"] },
  { name: "Bundling Coocaa - Reactivation", group: "Bundling",   keywords: ["coocaa reaktivasi","coocaa reactivation"] },
  { name: "Bundling Coocaa - Whitelist",    group: "Bundling",   keywords: ["coocaa whitelist","coocaa wl"] },
  { name: "Bundling Eroc",                  group: "Bundling",   keywords: ["eroc"] },
  { name: "Bundling Haier/Aqua - Reactivation", group: "Bundling", keywords: ["haier reaktivasi","aqua reaktivasi"] },
  { name: "Bundling Haier/Aqua - Whitelist",    group: "Bundling", keywords: ["haier whitelist","aqua whitelist"] },
  { name: "Bundling Hisense - Reactivation",    group: "Bundling", keywords: ["hisense reaktivasi","hisense reactivation"] },
  { name: "Bundling Hisense - Whitelist",       group: "Bundling", keywords: ["hisense whitelist","hisense wl"] },
  { name: "Bundling Polytron - Reactivation",   group: "Bundling", keywords: ["polytron reaktivasi","polytron reactivation"] },
  { name: "Bundling Polytron - Whitelist",      group: "Bundling", keywords: ["polytron whitelist","polytron wl"] },
  { name: "Bundling Samsung - Reactivation",    group: "Bundling", keywords: ["samsung reaktivasi","samsung reactivation"] },
  { name: "Bundling Samsung - Whitelist",       group: "Bundling", keywords: ["samsung whitelist","samsung wl"] },
  { name: "Bundling SHARP",                     group: "Bundling", keywords: ["sharp","bundling sharp"] },
  { name: "Bundling SHARP - Reactivation",      group: "Bundling", keywords: ["sharp reaktivasi","sharp reactivation"] },
  { name: "Bundling SONY - Reactivation",       group: "Bundling", keywords: ["sony reaktivasi","sony reactivation"] },
  { name: "Bundling SONY - Whitelist",          group: "Bundling", keywords: ["sony whitelist","sony wl"] },
  { name: "Bundling TCL - Reactivation",        group: "Bundling", keywords: ["tcl reaktivasi","tcl reactivation"] },
  { name: "Bundling TCL - Whitelist",           group: "Bundling", keywords: ["tcl whitelist","tcl wl"] },
  { name: "Bundling Toshiba - Reactivation",    group: "Bundling", keywords: ["toshiba reaktivasi","toshiba reactivation"] },
  { name: "Bundling Toshiba - Whitelist",       group: "Bundling", keywords: ["toshiba whitelist","toshiba wl"] },
  { name: "Bundling TV Problem",                group: "Bundling", keywords: ["tv problem","platinum tv"] },

  { name: "Package Information",                group: "Paket",      keywords: ["info paket","informasi paket","tanya paket"] },
  { name: "Package Not Active",                 group: "Paket",      keywords: ["paket tidak aktif","paket ga aktif","package not active"] },
  { name: "Package Not Active - 3",             group: "Paket",      keywords: ["3 indonesia","tri","provider 3"] },
  { name: "Package Not Active - Apple",         group: "Paket",      keywords: ["apple","iphone","ios","app store"] },
  { name: "Package Not Active - Apple Mahasiswa",group: "Paket",     keywords: ["apple mahasiswa","student apple"] },
  { name: "Package Not Active - Bundle",        group: "Paket",      keywords: ["bundle tidak aktif","paket bundle"] },
  { name: "Package Not Active - By.U",          group: "Paket",      keywords: ["byu","by.u"] },
  { name: "Package Not Active - direct",        group: "Paket",      keywords: ["direct","payment direct"] },
  { name: "Package Not Active - GPB",           group: "Paket",      keywords: ["gpb","google play billing","gpa."] },
  { name: "Package Not Active - GPB Mahasiswa", group: "Paket",      keywords: ["gpb mahasiswa"] },
  { name: "Package Not Active - Indihome",      group: "Paket",      keywords: ["indihome","telkom indihome"] },
  { name: "Package Not Active - Indosat",       group: "Paket",      keywords: ["indosat","im3","ooredoo"] },
  { name: "Package Not Active - Moratel/Oxygen",group: "Paket",      keywords: ["moratel","oxygen"] },
  { name: "Package Not Active - Myrep",         group: "Paket",      keywords: ["myrep"] },
  { name: "Package Not Active - NEX",           group: "Paket",      keywords: ["nex","nex parabola"] },
  { name: "Package Not Active - QRIS",          group: "Paket",      keywords: ["qris","scan qr"] },
  { name: "Package Not Active - Smartfren",     group: "Paket",      keywords: ["smartfren","smart fren","sf","smartfena"] },
  { name: "Package Not Active - Telkomsel",     group: "Paket",      keywords: ["telkomsel","tsel","simpati"] },
  { name: "Package Not Active - TVOD",          group: "Paket",      keywords: ["tvod","beli film","sewa film"] },
  { name: "Package Not Active - VA",            group: "Paket",      keywords: ["virtual account","va"] },
  { name: "Package Not Active - CC",            group: "Paket",      keywords: ["credit card","kartu kredit","cc"] },
  { name: "Package Not Active - XL/Axis",       group: "Paket",      keywords: ["xl","axis","bundling xl","paket xl"] },
  { name: "Package Not Active - XL Home",       group: "Paket",      keywords: ["xl home","xlhome"] },
  { name: "Package Not Active - Ewallet",       group: "Paket",      keywords: ["ewallet","dompet digital"] },
  { name: "Package Not Active - First Media",   group: "Paket",      keywords: ["first media"] },
  { name: "Package Not Active - Varnion",       group: "Paket",      keywords: ["varnion"] },
  { name: "Deactivate Package",                 group: "Paket",      keywords: ["nonaktifkan paket","stop berlangganan"] },
  { name: "Cancel Recurring",                   group: "Paket",      keywords: ["cancel recurring","batal recurring"] },
  { name: "Recuring Problem",                   group: "Paket",      keywords: ["masalah recurring","recurring error"] },
  { name: "Recurring Autodebet",                group: "Paket",      keywords: ["autodebet","auto debet"] },
  { name: "Upgrade Package",                    group: "Paket",      keywords: ["upgrade","naik paket"] },
  { name: "Subs Status",                        group: "Paket",      keywords: ["status langganan","cek subscribe"] },
  { name: "Platinum Mahasiswa Problem",         group: "Paket",      keywords: ["platinum mahasiswa"] },
  { name: "Not Given Bonus",                    group: "Paket",      keywords: ["bonus tidak diberikan","bonus tidak masuk"] },

  { name: "Payment Problem",                    group: "Pembayaran", keywords: ["pembayaran gagal","payment error","bayar gagal"] },
  { name: "Refund",                             group: "Pembayaran", keywords: ["refund","kembalikan uang"] },
  { name: "Refund - Telco",                     group: "Pembayaran", keywords: ["refund telco","refund telkomsel"] },
  { name: "Top Up Coin",                        group: "Pembayaran", keywords: ["top up","topup coin","isi koin"] },
  { name: "Diamond Increase",                   group: "Pembayaran", keywords: ["diamond","tambah diamond"] },

  { name: "Voucher - BliBli",                   group: "Voucher",    keywords: ["blibli"] },
  { name: "Voucher - Bukalapak",                group: "Voucher",    keywords: ["bukalapak"] },
  { name: "Voucher - Coda",                     group: "Voucher",    keywords: ["coda","codashop"] },
  { name: "Voucher - DANA",                     group: "Voucher",    keywords: ["dana"] },
  { name: "Voucher - Decathlon",                group: "Voucher",    keywords: ["decathlon"] },
  { name: "Voucher - Gopay",                    group: "Voucher",    keywords: ["gopay","go pay"] },
  { name: "Voucher - Grab",                     group: "Voucher",    keywords: ["grab"] },
  { name: "Voucher - Lapak Gaming",             group: "Voucher",    keywords: ["lapak gaming"] },
  { name: "Voucher - LinkAja",                  group: "Voucher",    keywords: ["linkaja","link aja"] },
  { name: "Voucher - OVO",                      group: "Voucher",    keywords: ["ovo"] },
  { name: "Voucher - Shopee",                   group: "Voucher",    keywords: ["shopee"] },
  { name: "Voucher - Shopee Pay",               group: "Voucher",    keywords: ["shopeepay","shopee pay"] },
  { name: "Voucher - Tokopedia",                group: "Voucher",    keywords: ["tokopedia","toped"] },
  { name: "Voucher - Unipin",                   group: "Voucher",    keywords: ["unipin"] },
  { name: "Voucher Expired",                    group: "Voucher",    keywords: ["voucher expired","voucher kadaluarsa"] },
  { name: "Voucher Problem",                    group: "Voucher",    keywords: ["voucher error","voucher gagal","kode voucher"] },
  { name: "Voucher Request",                    group: "Voucher",    keywords: ["minta voucher","request voucher"] },

  { name: "Offer",                              group: "Lainnya",    keywords: ["penawaran","promo","offer","diskon"] },
  { name: "Vidio Express",                      group: "Lainnya",    keywords: ["vidio express","express"] },
  { name: "Vidio Reward",                       group: "Lainnya",    keywords: ["reward","poin","vidio reward"] },
];

function getSheetId() {
  var id = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  if (!id) {
    throw new Error("SHEET_ID belum di-set di Script Properties. Buka Project Settings > Script Properties, tambahin key 'SHEET_ID' dengan value ID Google Sheet-nya.");
  }
  return id;
}

var DESCRIPTION_MAX_LEN = 80;
var DESCRIPTION_BOUNDARY_RE = /(Selamat\s|Halo\s|Mohon\s|Dear\s|Hi\s|User\s*:|MSISDN\s*:|Paket\s*:|Waktu\s*:|Source\s*:)/i;
var MONTH_SHEET_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function careBuildDeepLink(spaceName, threadName, messageName) {
  var spaceId = spaceName ? spaceName.replace(/^spaces\//, "") : "";
  if (!spaceId) return "";
  var threadId = threadName ? threadName.replace(/^spaces\/[^/]+\/threads\//, "") : "";
  var messageId = "";
  if (messageName) {
    var msgSegment = messageName.replace(/^spaces\/[^/]+\/messages\//, "");
    var dotIdx = msgSegment.indexOf(".");
    messageId = dotIdx >= 0 ? msgSegment.substring(dotIdx + 1) : msgSegment;
  }
  if (threadId && messageId) {
    return "https://chat.google.com/room/" + spaceId + "/" + threadId + "/" + messageId + "?cls=10";
  }
  if (threadId) {
    return "https://chat.google.com/room/" + spaceId + "/" + threadId;
  }
  return "https://chat.google.com/room/" + spaceId;
}

function careBuildThreadUrl(spaceName, threadName) {
  var spaceId = spaceName ? spaceName.replace(/^spaces\//, "") : "";
  if (!spaceId) return "";
  var threadId = threadName ? threadName.replace(/^spaces\/[^/]+\/threads\//, "") : "";
  if (threadId) {
    return "https://chat.google.com/room/" + spaceId + "/" + threadId + "/" + threadId + "?cls=10";
  }
  return "https://chat.google.com/room/" + spaceId;
}

function getMonthSheet() {
  var currentMonth = MONTH_SHEET_NAMES[new Date().getMonth()];
  var ss;
  try {
    ss = SpreadsheetApp.openById(getSheetId());
  } catch (e) {
    throw new Error("Gagal buka Spreadsheet (ID salah / sheet dihapus / akses dicabut). Detail: " + e.toString());
  }
  var sheet = ss.getSheetByName(currentMonth);
  if (!sheet) {
    Logger.log("Tab " + currentMonth + " tidak ditemukan, membuat tab baru");
    sheet = ss.insertSheet(currentMonth);
    sheet.getRange(1, 1, 1, 10).setValues([[
      "Timestamp", "Status", "Issue Type", "Source", "Thread", "Description",
      "PIC", "Note", "Resolution", "Closed At"
    ]]);
  }
  return sheet;
}

function careGetMonthlySheets() {
  var ss;
  try {
    ss = SpreadsheetApp.openById(getSheetId());
  } catch (e) {
    throw new Error("Gagal buka Spreadsheet (ID salah / sheet dihapus / akses dicabut). Detail: " + e.toString());
  }

  var sheets = [];
  for (var i = 0; i < MONTH_SHEET_NAMES.length; i++) {
    var sheet = ss.getSheetByName(MONTH_SHEET_NAMES[i]);
    if (sheet) sheets.push(sheet);
  }
  return sheets;
}

function careTokenPresentWholeWord(text, token) {
  var esc = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  var re = new RegExp("\\b" + esc + "\\b", "i");
  return re.test(text);
}

var GENERIC_NAME_WORDS = {
  "vidio": true, "package": true, "not": true, "active": true, "problem": true,
  "account": true, "bundling": true, "platinum": true, "paket": true,
  "reactivation": true, "whitelist": true, "activation": true,
  "login": true, "logout": true, "can't": true, "cant": true
};

var CATEGORY_OVERRIDES = [
  { phrase: "kendala langganan eb", category: "Payment Problem" }
];

function careFuzzyMatch(text) {
  if (!text || typeof text !== "string") return null;
  var lower = text.toLowerCase();
  for (var o = 0; o < CATEGORY_OVERRIDES.length; o++) {
    if (lower.includes(CATEGORY_OVERRIDES[o].phrase)) {
      return CATEGORY_OVERRIDES[o].category;
    }
  }
  var best = null, bestScore = 0, bestNameLen = 0;
  for (var i = 0; i < CATEGORIES.length; i++) {
    var cat = CATEGORIES[i];
    var score = 0;
    var nameLower = cat.name.toLowerCase();
    if (nameLower === lower) return cat.name;
    if (nameLower.includes(lower)) score += 60;
    for (var j = 0; j < cat.keywords.length; j++) {
      var kw = cat.keywords[j].toLowerCase();
      var tokens = kw.split(/\s+/);
      if (tokens.length === 1) {
        if (kw.length <= 3) {
          if (careTokenPresentWholeWord(lower, kw)) score += 40;
        } else if (lower.includes(kw)) {
          score += 40;
        } else if (kw.includes(lower) && lower.length >= 3) {
          score += 20;
        }
      } else {
        if (lower.includes(kw)) {
          score += 55;
        } else {
          var allPresent = tokens.every(function (t) {
            return t.length <= 3 ? careTokenPresentWholeWord(lower, t) : lower.includes(t);
          });
          if (allPresent) score += 45;
        }
      }
    }
    var qWords = lower.split(/\s+/).filter(function(w){ return w.length > 2; });
    var cWords = nameLower.split(/[\s\/\-]+/).filter(function(w){ return !GENERIC_NAME_WORDS[w]; });
    for (var q = 0; q < qWords.length; q++) {
      for (var c = 0; c < cWords.length; c++) {
        if (cWords[c] === qWords[q]) score += 15;
        else if (cWords[c].includes(qWords[q]) || qWords[q].includes(cWords[c])) score += 8;
      }
    }
    if (score > bestScore || (score === bestScore && score > 0 && cat.name.length > bestNameLen)) {
      bestScore = score; best = cat.name; bestNameLen = cat.name.length;
    }
  }
  return bestScore >= 15 ? best : null;
}

function careSanitizeForLog(text) {
  if (!text) return "";
  return text.replace(/[\r\n]+/g, " ⏎ ").substring(0, 500);
}

function careSanitizeForSheet(value) {
  if (value === null || value === undefined) return value;
  var text = value.toString();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function careParseMessage(text) {
  if (!text || typeof text !== "string") {
    return { description: "(tanpa judul)", source: "", msisdn: "", userId: "" };
  }

  var firstLine = text.split(/\r?\n/)[0].trim();
  var descMatch = firstLine.match(/^\d{1,2}\s+\w+\s+\d{4}\s*[-–]\s*(.+)$/i);
  var dashMatch = firstLine.match(/-\s*(.+)$/);
  var rawTitle  = descMatch ? descMatch[1].trim() : (dashMatch ? dashMatch[1].trim() : firstLine);

  var boundaryIdx = rawTitle.search(DESCRIPTION_BOUNDARY_RE);
  var description = boundaryIdx > 0 ? rawTitle.substring(0, boundaryIdx).trim() : rawTitle;

  if (description.length > DESCRIPTION_MAX_LEN) {
    description = description.substring(0, DESCRIPTION_MAX_LEN).trim() + "...";
  }
  if (!description) description = "(tanpa judul)";

  var sourceUrlMatch = text.match(/Source\s*:\s*(?:\[[^\]]*\]\()?([^\s\]\)\n\r]+)/i);
  var source = "";
  if (sourceUrlMatch) {
    source = sourceUrlMatch[1].trim();
  } else {
    var sourceTextMatch = text.match(/Source\s*:\s*(WAG?\b[^\r\n]*?)(?:\.\s|\.\s*$|\.?\s*Terima\s*kasih|\r?\n|$)/i);
    if (sourceTextMatch) {
      source = sourceTextMatch[1].trim();
    }
  }

  if (!source) {
    var freshdeskMatch = text.match(/https?:\/\/[^\s\n\r]*freshdesk\.com\/a\/tickets\/\d+/i);
    if (freshdeskMatch) source = freshdeskMatch[0].trim();
  }
  if (!source) {
    var emplifiMatch = text.match(/https?:\/\/[^\s\n\r]*emplifi\.io\/[^\s\n\r]*/i);
    if (emplifiMatch) source = emplifiMatch[0].trim();
  }
  if (!source) {
    var waFreeMatch = text.match(/\b(WAG?\b[^\r\n]*?)(?:\.\s|\.\s*$|\.?\s*Terima\s*kasih|\r?\n|$)/i);
    if (waFreeMatch) source = waFreeMatch[1].trim();
  }
  if (!source) {
    Logger.log("careParseMessage: Source tidak terdeteksi. Raw text: [" + careSanitizeForLog(text) + "]");
  }

  var msisdnMatch = text.match(/MSISDN\s*:\s*(?:https?:\/\/[^\s]+\s*[-–]\s*)?(\d{8,15})/i);
  var msisdn      = msisdnMatch ? msisdnMatch[1].trim() : "";

  var userIdMatch = text.match(/vidio\.com\/admin\/users\/(\d+)/i);
  var userId      = userIdMatch ? userIdMatch[1].trim() : "";

  var uniqueIdMatch = text.match(/(?:Unique\s*ID|UniqueID)\s*:\s*([A-Za-z0-9_-]+)/i);
  var uniqueId      = uniqueIdMatch ? uniqueIdMatch[1].trim() : "";

  return {
    description: description,
    source: source,
    msisdn: msisdn,
    userId: userId,
    uniqueId: uniqueId
  };
}

function wrapCreateMessage(messagePayload, threadName) {
  if (threadName) {
    messagePayload.thread = { name: threadName };
  }
  return {
    hostAppDataAction: {
      chatDataAction: {
        createMessageAction: {
          message: messagePayload
        }
      }
    }
  };
}

function careSyncAck(threadName) {
  return wrapCreateMessage({ text: "✅" }, threadName);
}

function careSendThreadedMessage(spaceName, threadName, messagePayload) {
  if (threadName) {
    messagePayload.thread = { name: threadName };
  }
  if (!spaceName) {
    Logger.log("careSendThreadedMessage: spaceName kosong, fallback ke synchronous response");
    return wrapCreateMessage(messagePayload, threadName);
  }
  try {
    Chat.Spaces.Messages.create(messagePayload, spaceName, {
      messageReplyOption: "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
    });
    return careSyncAck(threadName);
  } catch (err) {
    Logger.log("careSendThreadedMessage error: " + err.toString());
    return wrapCreateMessage(messagePayload, threadName);
  }
}

var CARE_PROCESSED_PREFIX = "care_processed_";
var CARE_PROCESSED_TTL = 21600;

function careAlreadyProcessed(messageName) {
  if (!messageName) return null;
  try {
    return CacheService.getScriptCache().get(CARE_PROCESSED_PREFIX + messageName);
  } catch (e) {
    return null;
  }
}

function careMarkProcessed(messageName, confirmText) {
  if (!messageName) return;
  try {
    CacheService.getScriptCache().put(CARE_PROCESSED_PREFIX + messageName, confirmText, CARE_PROCESSED_TTL);
  } catch (e) {
    Logger.log("careMarkProcessed gagal simpan cache: " + e.toString());
  }
}

function careNormalizeDuplicateText(value) {
  return (value || "")
    .toString()
    .toLowerCase()
    .replace(/\[[^\]]*\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function careIsOneEditAway(candidate, expected) {
  if (candidate === expected || Math.abs(candidate.length - expected.length) > 1) return false;

  if (candidate.length === expected.length) {
    var mismatchIndexes = [];
    for (var i = 0; i < expected.length; i++) {
      if (candidate.charAt(i) !== expected.charAt(i)) mismatchIndexes.push(i);
    }
    if (mismatchIndexes.length === 1) return true;
    return mismatchIndexes.length === 2 &&
      mismatchIndexes[1] === mismatchIndexes[0] + 1 &&
      candidate.charAt(mismatchIndexes[0]) === expected.charAt(mismatchIndexes[1]) &&
      candidate.charAt(mismatchIndexes[1]) === expected.charAt(mismatchIndexes[0]);
  }

  var longer = candidate.length > expected.length ? candidate : expected;
  var shorter = candidate.length > expected.length ? expected : candidate;
  var longIndex = 0;
  var shortIndex = 0;
  var skippedCharacter = false;
  while (longIndex < longer.length && shortIndex < shorter.length) {
    if (longer.charAt(longIndex) === shorter.charAt(shortIndex)) {
      longIndex++;
      shortIndex++;
    } else if (skippedCharacter) {
      return false;
    } else {
      skippedCharacter = true;
      longIndex++;
    }
  }
  return true;
}

function careFindCommandTypo(text) {
  var candidate = (text || "").toString().toLowerCase().replace(/[.!?,;:]+$/, "").trim();
  if (!candidate || /\s/.test(candidate)) return "";

  var commands = ["input"].concat(Object.keys(STATUS_COMMANDS));
  for (var i = 0; i < commands.length; i++) {
    if (careIsOneEditAway(candidate, commands[i])) return commands[i];
  }
  return "";
}

function careNormalizeDuplicateUrl(value) {
  var text = (value || "").toString();
  var match = text.match(/https?:\/\/[^\s\]\)]+/i);
  return match ? match[0].replace(/[.,]+$/, "").toLowerCase() : "";
}

function careFindDuplicateReport(uniqueId, userId, msisdn, category, description, source) {
  if (!category) return null;

  var identifiers = [];
  if (uniqueId) identifiers.push({ label: "Unique ID", value: uniqueId });
  if (userId) identifiers.push({ label: "User ID", value: userId });
  if (msisdn) identifiers.push({ label: "MSISDN", value: msisdn });

  var sheets = [getMonthSheet()];
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    var lastRow = sheet.getLastRow();
    if (lastRow < 1) continue;

    var data = sheet.getRange(1, 3, lastRow, 4).getValues();
    for (var rowIndex = 0; rowIndex < data.length; rowIndex++) {
      if (data[rowIndex][0] !== category) continue;

      var searchableText = [
        data[rowIndex][1],
        data[rowIndex][2],
        data[rowIndex][3]
      ].join("\n");
      for (var identifierIndex = 0; identifierIndex < identifiers.length; identifierIndex++) {
        var identifier = identifiers[identifierIndex];
        var escapedValue = identifier.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        var identifierPattern;
        if (identifier.label === "User ID") {
          identifierPattern = new RegExp(
            "(?:User\\s*ID\\s*:\\s*" + escapedValue + "(?:\\s|\\||$)|vidio\\.com\\/admin\\/users\\/" + escapedValue + "(?:[)\\s]|$))",
            "i"
          );
        } else if (identifier.label === "Unique ID") {
          identifierPattern = new RegExp(
            "Unique\\s*ID\\s*:\\s*" + escapedValue + "(?:\\s|\\||$)",
            "i"
          );
        } else {
          identifierPattern = new RegExp(
            "MSISDN\\s*:\\s*" + escapedValue + "(?:\\s|\\||$)",
            "i"
          );
        }
        if (identifierPattern.test(searchableText)) {
          return {
            sheetName: sheet.getName(),
            row: rowIndex + 1,
            searchKey: identifier.value,
            identifierLabel: identifier.label
          };
        }
      }

      var legacyDescription = careNormalizeDuplicateText(data[rowIndex][3]);
      var legacySource = careNormalizeDuplicateUrl(data[rowIndex][1]);
      var incomingDescription = careNormalizeDuplicateText(description);
      var incomingSource = careNormalizeDuplicateUrl(source);
      if (incomingDescription && incomingSource &&
          legacyDescription === incomingDescription &&
          legacySource === incomingSource) {
        return {
          sheetName: sheet.getName(),
          row: rowIndex + 1,
          searchKey: incomingSource,
          identifierLabel: "legacy Description + Source"
        };
      }
    }
  }
  return null;
}

function careProcessReport(rawText, spaceUrl, threadName, messageObj, spaceName) {
  var messageName = messageObj && messageObj.name ? messageObj.name : "";

  var cachedConfirm = careAlreadyProcessed(messageName);
  if (cachedConfirm) {
    Logger.log("Event " + messageName + " udah pernah diproses, skip appendRow + skip kirim ulang (retry).");
    return careSyncAck(threadName);
  }

  var parsed   = careParseMessage(rawText);
  var category = careFuzzyMatch(rawText);

  var identifierText = [];
  if (parsed.uniqueId) identifierText.push("Unique ID: " + parsed.uniqueId);
  if (parsed.msisdn) identifierText.push("MSISDN: " + parsed.msisdn);
  if (parsed.userId) identifierText.push("User ID: " + parsed.userId);

  var descriptionForSheet = parsed.description;
  if (identifierText.length > 0) {
      descriptionForSheet += " | " + identifierText.join(" | ");
  }

  var sheet     = getMonthSheet();
  var sheetName = sheet.getName();

  var reportLock = LockService.getScriptLock();
  reportLock.waitLock(30000);
  try {
    var duplicate = careFindDuplicateReport(
      parsed.uniqueId,
      parsed.userId,
      parsed.msisdn,
      category,
      parsed.description,
      parsed.source
    );

    if (duplicate) {
      var rejectText = "⚠️ *Input Ditolak: Data Duplikat!*\n" +
                       "Laporan untuk kendala *" + (category || "Tidak Terdeteksi") + "* dengan identitas (" + duplicate.identifierLabel + ": " + duplicate.searchKey + ") sudah pernah dicatat.\n\n" +
                       "📍 *Lokasi Data Lama:*\n" +
                       "Tab: *" + duplicate.sheetName + "*\n" +
                       "Baris: *" + duplicate.row + "*\n\n" +
                       "_Silakan Menghapus thread ini karena double .Terima kasih._";

      careMarkProcessed(messageName, rejectText);
      return careSendThreadedMessage(spaceName, threadName, { text: rejectText });
    }

    sheet.appendRow([
      new Date(),
      "Waiting PIC Reply",
      category || "",
      careSanitizeForSheet(parsed.source),
      careSanitizeForSheet(spaceUrl),
      careSanitizeForSheet(descriptionForSheet),
      "",
      category ? "" : "⚠️ Kategori tidak terdeteksi otomatis, mohon cek manual",
      "",
      ""
    ]);
  } finally {
    reportLock.releaseLock();
  }

  var lines = [];
  lines.push("✅ Tercatat di tab *" + sheetName + "*");
  lines.push("Issue Type: " + (category ? category : "⚠️ tidak terdeteksi otomatis, mohon isi manual di sheet"));
  lines.push("Description: " + parsed.description);
  if (parsed.msisdn) lines.push("MSISDN: " + parsed.msisdn);
  if (parsed.userId) lines.push("User ID: " + parsed.userId);
  lines.push("Source: " + (parsed.source || "-"));
  lines.push("Thread: " + (spaceUrl || "-"));
  lines.push("Status: Waiting PIC Reply");

  var confirmText = lines.join("\n");
  careMarkProcessed(messageName, confirmText);
  return careSendThreadedMessage(spaceName, threadName, { text: confirmText });
}

var STATUS_COMMANDS = {
  "checking": "PIC Checking",
  "waiting": "Waiting User Reply",
  "progress": "In Progress Fixing",
  "done": "Solved",
  "closed": "Closed",
  "reopen": "Waiting PIC Reply"
};

function careUpdateStatus(spaceName, threadName, newStatus) {
  var threadUrl = careBuildThreadUrl(spaceName, threadName);
  getMonthSheet();

  if (!threadUrl) {
    return { found: false, rows: [], locations: [] };
  }

  var matches = [];
  var sheets = careGetMonthlySheets();
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    var lastRow = sheet.getLastRow();
    if (lastRow < 1) continue;

    var data = sheet.getRange(1, 1, lastRow, 10).getValues();
    for (var rowIndex = 0; rowIndex < data.length; rowIndex++) {
      var rowThreadUrl = (data[rowIndex][4] || "").toString().trim();
      if (rowThreadUrl && rowThreadUrl === threadUrl) {
        matches.push({ sheet: sheet, sheetName: sheet.getName(), row: rowIndex + 1 });
      }
    }
  }

  if (matches.length === 0) {
    return { found: false, rows: [], locations: [] };
  }

  var statusLock = LockService.getScriptLock();
  statusLock.waitLock(30000);
  try {
    for (var j = 0; j < matches.length; j++) {
      matches[j].sheet.getRange(matches[j].row, 2).setValue(newStatus);
    }
  } finally {
    statusLock.releaseLock();
  }

  var locations = matches.map(function (match) {
    return match.sheetName + "!" + match.row;
  });
  return { found: true, rows: locations, locations: locations };
}

function careFetchRepliedMessage(spaceName, threadName, currentMessageName, currentMessage) {
  if (!spaceName || !threadName) {
    Logger.log("careFetchRepliedMessage: spaceName/threadName kosong");
    return null;
  }
  try {
    var quotedMessageName = "";
    if (currentMessage && currentMessage.quotedMessageMetadata) {
      quotedMessageName = currentMessage.quotedMessageMetadata.name || "";
    }
    if (quotedMessageName && quotedMessageName !== currentMessageName) {
      var quotedMessage = Chat.Spaces.Messages.get(quotedMessageName);
      if (quotedMessage && quotedMessage.text && quotedMessage.text.trim().length > 0) {
        return quotedMessage.text;
      }
    }

    var pageToken = "";
    var pageCount = 0;
    do {
      var listOptions = {
        filter: 'thread.name = "' + threadName + '"',
        orderBy: "createTime asc",
        pageSize: 100
      };
      if (pageToken) listOptions.pageToken = pageToken;

      var res = Chat.Spaces.Messages.list(spaceName, listOptions);
      var messages = (res && res.messages) ? res.messages : [];
      for (var i = 0; i < messages.length; i++) {
        var m = messages[i];
        if (m.name === currentMessageName) continue;
        var senderType = (m.sender && m.sender.type) ? m.sender.type : "";
        if (senderType === "BOT") continue;
        var candidateText = m.text || "";
        if (candidateText.trim().length > 0) {
          return candidateText;
        }
      }

      pageToken = (res && res.nextPageToken) ? res.nextPageToken : "";
      pageCount++;
    } while (pageToken && pageCount < 10);

    Logger.log("careFetchRepliedMessage: tidak ada pesan human ditemukan di thread " + threadName);
    return null;
  } catch (err) {
    Logger.log("careFetchRepliedMessage error: " + err.toString());
    return null;
  }
}

function onMessage(event) {
  try {
    Logger.log("Initiate onMessage");
    var messageObj = null;
    var spaceObj   = null;

    if (event) {
      if (event.chat && event.chat.messagePayload && event.chat.messagePayload.message) {
        messageObj = event.chat.messagePayload.message;
        spaceObj   = event.chat.messagePayload.space || messageObj.space;
      } else if (event.chat && event.chat.message) {
        messageObj = event.chat.message;
        spaceObj   = event.chat.space;
      } else if (event.message) {
        messageObj = event.message;
        spaceObj   = event.space || (event.message && event.message.space);
      } else if (event.commonEventObject && event.commonEventObject.message) {
        messageObj = event.commonEventObject.message;
        spaceObj   = event.commonEventObject.space;
      }
    }

    if (!messageObj) {
      Logger.log("Event received without a message object. Full event: " + JSON.stringify(event));
      return wrapCreateMessage({
        text: "Halo! Saya menerima event, tapi tidak ada objek pesan di dalamnya.\n\n" +
              "Debug: " + JSON.stringify(event).substring(0, 300)
      });
    }

    var text       = messageObj.argumentText || messageObj.text || "";
    var spaceName  = (spaceObj && spaceObj.name) ? spaceObj.name : "";
    var threadName = (messageObj.thread && messageObj.thread.name) ? messageObj.thread.name : "";
    var messageName = messageObj.name || "";
    var spaceUrl   = careBuildThreadUrl(spaceName, threadName);
    var hasBotMention = /@care(?:responder(?:-app)?)?/i.test(text);
    var textClean  = text.replace(/@care(?:responder(?:-app)?)?/gi, "").trim();
    var textForCommandCheck = textClean.replace(/["'“”‘’]/g, "").trim();

    if (/^input$/i.test(textForCommandCheck)) {
      var repliedText = careFetchRepliedMessage(spaceName, threadName, messageName, messageObj);
      if (repliedText) {
        return careProcessReport(repliedText, spaceUrl, threadName, messageObj, spaceName);
      }
      return careSendThreadedMessage(spaceName, threadName, {
        text: "Maaf, saya tidak bisa menemukan isi laporan yang di-reply.\n\n" +
              "Silakan mention saya langsung di pesan laporannya, contoh:\n" +
              "@careresponder-app 8 Juli 2026 - Bundling Indosat\n[isi laporan]"
      });
    }

    var suggestedCommand = careFindCommandTypo(textForCommandCheck);
    if (suggestedCommand) {
      var typoWarning = "⚠️ Perintah tidak dikenali. Mungkin maksud Anda *" + suggestedCommand + "*.\n" +
        "Pesan ini tidak dicatat ke sheet. Silakan kirim ulang dengan perintah yang benar.";
      var typoCached = careAlreadyProcessed(messageName);
      if (typoCached) return careSyncAck(threadName);
      careMarkProcessed(messageName, typoWarning);
      return careSendThreadedMessage(spaceName, threadName, { text: typoWarning });
    }

    if (hasBotMention && textForCommandCheck.length > 0 && textForCommandCheck.length <= 2) {
      var shortMessageWarning = "⚠️ Pesan terlalu singkat dan tidak dikenali sebagai perintah. Pesan ini tidak dicatat ke sheet.\n" +
        "Kirim ulang perintah yang benar atau sertakan isi laporan setelah mention bot.";
      var shortMessageCached = careAlreadyProcessed(messageName);
      if (shortMessageCached) return careSyncAck(threadName);
      careMarkProcessed(messageName, shortMessageWarning);
      return careSendThreadedMessage(spaceName, threadName, { text: shortMessageWarning });
    }

    var statusCommandKey = textForCommandCheck.toLowerCase();
    if (Object.prototype.hasOwnProperty.call(STATUS_COMMANDS, statusCommandKey)) {
      var targetStatus = STATUS_COMMANDS[statusCommandKey];
      var statusCacheKey = "status_" + statusCommandKey + "_" + messageName;
      var statusCached = careAlreadyProcessed(statusCacheKey);
      if (statusCached) {
        Logger.log("Event '" + statusCommandKey + "' " + messageName + " udah pernah diproses, skip (retry).");
        return careSyncAck(threadName);
      }
      var statusResult = careUpdateStatus(spaceName, threadName, targetStatus);
      var statusText;
      if (statusResult.found) {
        statusText = "✅ Status diupdate ke *" + targetStatus + "*\n" +
          "Baris: " + statusResult.rows.join(", ");
      } else {
        statusText = "⚠️ Gak nemu laporan yang cocok sama thread ini di seluruh tab bulanan.\n" +
          "Pastikan laporan ini emang udah pernah dicatat lewat bot ini (@careresponder-app).";
      }
      careMarkProcessed(statusCacheKey, statusText);
      return careSendThreadedMessage(spaceName, threadName, { text: statusText });
    }

    if (textClean.length > 0) {
      return careProcessReport(textClean, spaceUrl, threadName, messageObj, spaceName);
    }

    return wrapCreateMessage({
      text: "Hei! Ada 3 cara pakai bot ini:\n\n" +
            "1️⃣ Ketik langsung:\n@careresponder-app 29 Juni 2026 - Bundling Indosat\n[isi laporan]\n\n" +
            "2️⃣ Reply ke pesan laporan:\nReply pesan → ketik @careresponder-app input\n\n" +
            "3️⃣ Update status (di thread laporan yang sama):\n" +
            "• checking → PIC Checking\n" +
            "• waiting → Waiting User Reply\n" +
            "• progress → In Progress Fixing\n" +
            "• done → Solved\n" +
            "• closed → Closed\n" +
            "• reopen → Waiting PIC Reply"
    });

  } catch (err) {
    Logger.log("onMessage error: " + err.toString());
    return wrapCreateMessage({ text: "Maaf, terjadi kendala saat memproses pesan. Silakan coba lagi atau hubungi admin." });
  }
}

function onAddToSpace(event) {
  return wrapCreateMessage({
    text: "Terima kasih telah menambahkan saya! Silakan mention saya diikuti laporan, atau reply pesan laporan lalu ketik 'input' untuk langsung dicatat otomatis ke sheet."
  });
}

function onRemoveFromSpace(event) {
  Logger.log("Bot removed from space");
}
