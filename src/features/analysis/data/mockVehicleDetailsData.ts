import type { VehicleDetails } from "../models/vehicleDetails.types";

const DEFAULT_VEHICLE_IMAGE =
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=260&fit=crop";

const baseComparison = [
  {
    property: "plate",
    propertyLabel: "رقم اللوحة",
    aiValue: "ABC-1284",
    actualValue: "ABC-1234",
    confidence: 92,
    mismatch: true,
  },
  {
    property: "model",
    propertyLabel: "الموديل",
    aiValue: "Toyota Camry",
    actualValue: "Toyota Camry",
    confidence: 96,
    mismatch: false,
  },
  {
    property: "type",
    propertyLabel: "النوع",
    aiValue: "Sedan",
    actualValue: "Sedan",
    confidence: 94,
    mismatch: false,
  },
  {
    property: "color",
    propertyLabel: "اللون",
    aiValue: "Black",
    actualValue: "White",
    confidence: 88,
    mismatch: true,
  },
];

function createDetails(
  id: string,
  plateNumber: string,
  overrides: Partial<VehicleDetails> = {},
): VehicleDetails {
  return {
    id,
    plateNumber,
    imageUrl: DEFAULT_VEHICLE_IMAGE,
    severity: "عالية",
    score: 87,
    alertType: "اختلاف في اللوحة",
    alertMessage:
      "تم اكتشاف اختلاف بين بيانات الذكاء الاصطناعي والبيانات الفعلية المسجلة في النظام",
    comparisonRows: baseComparison,
    ...overrides,
  };
}

export const mockVehicleDetailsMap: Record<string, VehicleDetails> = {
  a1: createDetails("a1", "أ ب ج 1234", {
    alertType: "مطلوب",
    alertMessage: "مطابقة مع قائمة المطلوبين — يرجى الإبلاغ فوراً",
    score: 91,
  }),
  a2: createDetails("a2", "د هـ و 5678", {
    severity: "متوسطة",
    alertType: "سرعة زائدة",
    alertMessage: "تجاوز السرعة المحددة بمقدار 35 كم/س",
    score: 72,
    comparisonRows: baseComparison.map((row) =>
      row.property === "plate"
        ? { ...row, aiValue: "DHW-5678", actualValue: "DHW-5678", mismatch: false }
        : row,
    ),
  }),
  a3: createDetails("a3", "ر س ت 9012", {
    alertType: "قائمة سوداء",
    alertMessage: "المركبة مدرجة في القائمة السوداء للنظام",
    score: 95,
  }),
  a4: createDetails("a4", "ث خ ذ 3456", {
    alertType: "لوحة مزورة",
    alertMessage:
      "احتمال تزوير اللوحة — عدم تطابق السمات البصرية مع السجل الرسمي",
    score: 87,
  }),
  a5: createDetails("a5", "ض ظ غ 7890", {
    severity: "منخفضة",
    alertType: "سلوك مشبوه",
    alertMessage: "توقف متكرر غير اعتيادي في المنطقة المراقبة",
    score: 58,
    comparisonRows: baseComparison.map((row) => ({ ...row, mismatch: false })),
  }),
  a6: createDetails("a6", "ف ق ك 2468", {
    severity: "منخفضة",
    alertType: "سرعة زائدة",
    score: 64,
  }),
  a7: createDetails("a7", "ل م ن 1357", {
    alertType: "مطلوب",
    alertMessage: "تطابق جزئي مع بلاغ سرقة مركبة",
    score: 89,
  }),
  a8: createDetails("a8", "هـ و ي 8642", {
    severity: "متوسطة",
    alertType: "سلوك مشبوه",
    score: 76,
  }),
  a9: createDetails("a9", "أ ص د 4321", {
    severity: "متوسطة",
    alertType: "قائمة سوداء",
    score: 81,
  }),
  a10: createDetails("a10", "ج ح خ 7788", {
    alertType: "سرعة زائدة",
    alertMessage: "تجاوز السرعة بمقدار 55 كم/س في منطقة سكنية",
    score: 93,
  }),
};

export const defaultVehicleDetails = mockVehicleDetailsMap.a4;
