export type RingBuilderLayer =
  | "metal"
  | "band"
  | "head"
  | "centerStone"
  | "sideStone"
  | "detail"
  | "weddingBand";

export type RingBuilderOption = {
  id: string;
  label: string;
  description: string;
  priceModifier: number;
  assetPath: string;
  compatibleMetals?: string[];
  compatibleHeads?: string[];
  previewLayer: RingBuilderLayer;
};

export const metalOptions: RingBuilderOption[] = [
  { id: "14k-yellow", label: "14K Yellow Gold", description: "Warm classic gold.", priceModifier: 0, assetPath: "/assets/ring-builder/metals/14k-yellow.svg", previewLayer: "metal" },
  { id: "14k-white", label: "14K White Gold", description: "Bright white-gold finish.", priceModifier: 120, assetPath: "/assets/ring-builder/metals/14k-white.svg", previewLayer: "metal" },
  { id: "14k-rose", label: "14K Rose Gold", description: "Soft rose-gold tone.", priceModifier: 120, assetPath: "/assets/ring-builder/metals/14k-rose.svg", previewLayer: "metal" },
  { id: "18k-yellow", label: "18K Yellow Gold", description: "Richer yellow gold.", priceModifier: 420, assetPath: "/assets/ring-builder/metals/18k-yellow.svg", previewLayer: "metal" },
  { id: "18k-white", label: "18K White Gold", description: "Premium white-gold finish.", priceModifier: 520, assetPath: "/assets/ring-builder/metals/18k-white.svg", previewLayer: "metal" },
  { id: "18k-rose", label: "18K Rose Gold", description: "Premium rose-gold finish.", priceModifier: 520, assetPath: "/assets/ring-builder/metals/18k-rose.svg", previewLayer: "metal" },
  { id: "platinum", label: "Platinum", description: "Dense bright platinum.", priceModifier: 950, assetPath: "/assets/ring-builder/metals/platinum.svg", previewLayer: "metal" },
];

export const centerStoneShapeOptions: RingBuilderOption[] = [
  { id: "round", label: "Round", description: "Classic brilliant sparkle.", priceModifier: 0, assetPath: "/assets/ring-builder/stones/round.svg", previewLayer: "centerStone" },
  { id: "oval", label: "Oval", description: "Elongated finger coverage.", priceModifier: 150, assetPath: "/assets/ring-builder/stones/oval.svg", previewLayer: "centerStone" },
  { id: "emerald", label: "Emerald", description: "Clean step-cut look.", priceModifier: 150, assetPath: "/assets/ring-builder/stones/emerald.svg", previewLayer: "centerStone" },
  { id: "radiant", label: "Radiant", description: "Brilliant square or rectangle.", priceModifier: 150, assetPath: "/assets/ring-builder/stones/radiant.svg", previewLayer: "centerStone" },
  { id: "marquise", label: "Marquise", description: "Long dramatic shape.", priceModifier: 250, assetPath: "/assets/ring-builder/stones/marquise.svg", previewLayer: "centerStone" },
  { id: "pear", label: "Pear", description: "Teardrop silhouette.", priceModifier: 250, assetPath: "/assets/ring-builder/stones/pear.svg", previewLayer: "centerStone" },
  { id: "cushion", label: "Cushion", description: "Soft square brilliance.", priceModifier: 150, assetPath: "/assets/ring-builder/stones/cushion.svg", previewLayer: "centerStone" },
  { id: "princess", label: "Princess", description: "Sharp square brilliant.", priceModifier: 150, assetPath: "/assets/ring-builder/stones/princess.svg", previewLayer: "centerStone" },
];

export const headOptions: RingBuilderOption[] = [
  { id: "four-prong", label: "Four Prong", description: "Clean everyday head.", priceModifier: 0, assetPath: "/assets/ring-builder/heads/four-prong.svg", previewLayer: "head" },
  { id: "six-prong", label: "Six Prong", description: "Classic secure look.", priceModifier: 120, assetPath: "/assets/ring-builder/heads/six-prong.svg", previewLayer: "head" },
  { id: "hidden-halo", label: "Hidden Halo", description: "Accent diamonds below the stone.", priceModifier: 650, assetPath: "/assets/ring-builder/heads/hidden-halo.svg", previewLayer: "head" },
  { id: "cathedral-head", label: "Cathedral Head", description: "Raised architectural profile.", priceModifier: 420, assetPath: "/assets/ring-builder/heads/cathedral-head.svg", previewLayer: "head" },
  { id: "bezel-head", label: "Bezel Head", description: "Smooth protective rim.", priceModifier: 520, assetPath: "/assets/ring-builder/heads/bezel-head.svg", previewLayer: "head" },
  { id: "tulip-head", label: "Tulip Head", description: "Petal-inspired basket.", priceModifier: 520, assetPath: "/assets/ring-builder/heads/tulip-head.svg", previewLayer: "head" },
];

export const bandOptions: RingBuilderOption[] = [
  { id: "classic-plain", label: "Classic plain band", description: "Smooth timeless shank.", priceModifier: 0, assetPath: "/assets/ring-builder/bands/classic-plain.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head", "bezel-head", "tulip-head"], previewLayer: "band" },
  { id: "thin-pave", label: "Thin pave band", description: "Fine diamond sparkle on a slim shank.", priceModifier: 550, assetPath: "/assets/ring-builder/bands/thin-pave.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head", "tulip-head"], previewLayer: "band" },
  { id: "french-pave", label: "French pave band", description: "V-shaped pave detail for extra light.", priceModifier: 750, assetPath: "/assets/ring-builder/bands/french-pave.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head"], previewLayer: "band" },
  { id: "marquise-side", label: "Marquise side-stone band", description: "Marquise accents along the shank.", priceModifier: 980, assetPath: "/assets/ring-builder/bands/marquise-side.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head", "tulip-head"], previewLayer: "band" },
  { id: "leaf-inspired", label: "Leaf-inspired band", description: "Organic leaf-like accents.", priceModifier: 850, assetPath: "/assets/ring-builder/bands/leaf-inspired.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-rose"], compatibleHeads: ["four-prong", "six-prong", "tulip-head", "hidden-halo"], previewLayer: "band" },
  { id: "floral-engraved", label: "Floral-inspired engraved band", description: "Original floral engraving detail.", priceModifier: 950, assetPath: "/assets/ring-builder/bands/floral-engraved.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "tulip-head", "hidden-halo"], previewLayer: "band" },
  { id: "criss-cross", label: "Criss-cross band", description: "Crossing shank movement.", priceModifier: 780, assetPath: "/assets/ring-builder/bands/criss-cross.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo"], previewLayer: "band" },
  { id: "split-shank", label: "Split shank band", description: "Two rails frame the center stone.", priceModifier: 880, assetPath: "/assets/ring-builder/bands/split-shank.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head"], previewLayer: "band" },
  { id: "cathedral", label: "Cathedral band", description: "Raised shoulders leading into the head.", priceModifier: 620, assetPath: "/assets/ring-builder/bands/cathedral.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["cathedral-head", "four-prong", "six-prong", "hidden-halo"], previewLayer: "band" },
  { id: "milgrain-vintage", label: "Milgrain vintage band", description: "Beaded vintage edge detail.", priceModifier: 720, assetPath: "/assets/ring-builder/bands/milgrain-vintage.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "bezel-head"], previewLayer: "band" },
  { id: "twisted-infinity", label: "Twisted infinity band", description: "Interwoven infinity-inspired shank.", priceModifier: 780, assetPath: "/assets/ring-builder/bands/twisted-infinity.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "tulip-head"], previewLayer: "band" },
  { id: "wedding-set-band", label: "Matching wedding set band", description: "Built around a paired wedding band look.", priceModifier: 1250, assetPath: "/assets/ring-builder/bands/wedding-set-band.svg", compatibleMetals: ["14k-yellow", "14k-white", "14k-rose", "18k-yellow", "18k-white", "18k-rose", "platinum"], compatibleHeads: ["four-prong", "six-prong", "hidden-halo", "cathedral-head"], previewLayer: "band" },
];

export const ringBuilderOptions = {
  metals: metalOptions,
  centerStoneShapes: centerStoneShapeOptions,
  heads: headOptions,
  bands: bandOptions,
};

// Phase 2 upgrade notes:
// Replace these SVG assetPath values with real CAD stills, Blender-rendered PNG/WebP layers,
// or Three.js / React Three Fiber GLB model references while preserving the option IDs.
