import React from "react";
import ProductDetailsPage from "@/app/components/productDetailsPage";

const products = {
  livestock: {
    title: "Livestock",
    subtitle: "We offer quality livestock for your farming needs.",
    description: `Livestock are the domesticated animals raised in an agricultural setting in order to provide labour and produce diversified products for consumption such as meat, eggs, milk, fur, leather, and wool. The term is sometimes used to refer solely to animals who are raised for consumption, and sometimes used to refer solely to farmed ruminants, such as cattle, sheep, and goats.[1] Horses are considered livestock in the United States.[2] The USDA classifies pork, veal, beef, and lamb (mutton) as livestock, and all livestock as red meat. Poultry and fish are not included in the category.[3] The latter is likely due to the fact that fish products are not governed by the USDA, but by the FDA.

The breeding, maintenance, slaughter and general subjugation of livestock, called animal husbandry, is a part of modern agriculture and has been practiced in many cultures since humanity's transition to farming from hunter-gatherer lifestyles. Animal husbandry practices have varied widely across cultures and time periods. It continues to play a major economic and cultural role in numerous communities.

Livestock farming practices have largely shifted to intensive animal farming. [4] Intensive animal farming increases the yield of the various commercial outputs, but also negatively impacts animal welfare, the environment, and public health.[5] In particular, beef, dairy and sheep are an outsized source of greenhouse gas emissions from agriculture.`,
    bgImage: "/images/livestock.png",
    subImages: [
      { src: "/images/cow.png", title: "Cow" },
      { src: "/images/pigs.png", title: "Pig" },
      { src: "/images/sheep.png", title: "Sheep" },
      { src: "/images/goat.png", title: "Goat" },
    ],
  },
  crops: {
    title: "Crops",
    subtitle: "We offer quality crop products available for pickup or delivery",
    description: `Crops are the backbone of human sustenance, providing the bulk of the food we consume and the raw materials for numerous products. They have been integral to human civilization for thousands of years, evolving from wild varieties to the highly specialized and productive strains we rely on today.
Crops can be broadly categorized into food crops, feed crops, fiber crops, oil crops, and industrial crops. Food crops, like rice, wheat, corn, and potatoes, are directly consumed by humans and are staples in many diets worldwide. Feed crops, such as alfalfa and clover, are primarily grown for livestock consumption, supporting the meat, dairy, and poultry industries. Fiber crops, including cotton, flax, and hemp, are essential for producing textiles. Oil crops like soybeans, sunflower, and canola are processed to extract oils used in cooking and industrial applications. Industrial crops, such as rubber and tobacco, have various commercial uses beyond food and textiles.

Cultivation practices vary significantly depending on the crop and the region. Traditional methods often involve plowing, sowing, irrigating, and harvesting, with many regions incorporating advanced techniques to increase yield and efficiency.
Crops play a crucial economic role, supporting millions of farmers and contributing to national economies. Major crop-producing countries like China, India, the United States, and Brazil dominate the global market, influencing food prices and trade policies. However, the environmental impact of crop production is a growing concern.`,
    bgImage: "/images/crops-bg.png",
    subImages: [
      { src: "/images/wheat.png", title: "Wheat" },
      { src: "/images/rice.png", title: "Rice" },
      { src: "/images/vegetable.png", title: "Vegetable" },
      { src: "/images/corn.png", title: "Corn" },
    ],
  },
  poultry: {
    title: "Poultry",
    subtitle: "We offer quality livestock for your farming needs.",
    description: `Poultry, includes chicken, turkey, duck, and other domesticated birds, has cemented itself as a staple in diets worldwide.

Nutritional Powerhouse
Poultry, especially chicken, is highly regarded for its lean protein content. It provides essential amino acids necessary for muscle repair and growth, making it a favorite among athletes and fitness enthusiasts. Additionally, poultry is rich in vitamins and minerals, including B vitamins (particularly B6 and B12), which play a crucial role in energy metabolism and brain function.

Health Benefits
Incorporating poultry into one's diet can offer numerous health advantages. Unlike red meats, poultry has lower levels of saturated fat, which can help in maintaining healthy cholesterol levels and reducing the risk of cardiovascular diseases. Moreover, poultry is an excellent source of omega-6 fatty acids, which are beneficial for brain function and cell growth.

Environmental Considerations
Compared to other livestock, poultry has a smaller environmental footprint. Poultry farming requires less land and water and generates lower greenhouse gas emissions. Innovations in feed efficiency and waste management further enhance the sustainability of poultry production, aligning with global efforts to reduce environmental impacts`,
    bgImage: "/images/poultry-bg.png",
    subImages: [
      { src: "/images/meat.png", title: "Meat" },
      { src: "/images/hen.png", title: "Hen" },
      { src: "/images/cow.png", title: "Cow" },
      { src: "/images/guineafowl.png", title: "Goat" },
    ],
  },
  fishes: {
    title: "Fishes",
    subtitle: "We offer quality fishes for your farming needs.",
    description: `Fishes, a diverse group of aquatic vertebrates, are among the most fascinating creatures inhabiting our planet's waters. From the shimmering scales of the tropical angelfish to the formidable presence of the great white shark, fishes exhibit an extraordinary variety in form, function, and habitat.

Diversity and Adaptation
There are over 33,000 known species of fishes, making them the most diverse group of vertebrates. They inhabit a wide range of environments, from the deepest ocean trenches to the highest mountain streams. This incredible diversity is a result of millions of years of evolution, enabling them to adapt to various ecological niches.
For instance, the goby fish can survive in both fresh and saltwater, making it a model of adaptability. On the other hand, the deep-sea anglerfish has developed bioluminescence to attract prey in the pitch-black depths of the ocean.

Fishes play a critical role in aquatic ecosystems. They are a vital link in the food chain, acting both as predators and prey. Small fish like sardines and anchovies feed on plankton and in turn, are preyed upon by larger fish, birds, and marine mammals. This balance helps maintain the health of marine and freshwater environments.
Additionally, fishes contribute to the economy and food security of many communities worldwide. Fisheries and aquaculture are major sources of protein and livelihood for millions of people. Sustainable fishing practices and conservation efforts are essential to protect these resources from overexploitation and environmental degradation.`,
    bgImage: "/images/fishes-bg.png",
    subImages: [
      { src: "/images/catfish.png", title: "Catfish" },
      { src: "/images/hake.png", title: "Hake" },
      { src: "/images/herring.png", title: "Herring" },
      { src: "/images/mackerel.png", title: "Mackerel" },
    ],
  },
};

export default function ProductDetails({ params }) {
  const product = products[params.productId];

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  return <ProductDetailsPage {...product} />;
}
