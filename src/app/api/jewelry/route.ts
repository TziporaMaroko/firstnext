import { NextResponse } from 'next/server';

type JewelryItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export async function GET() {
  const jewelryItems: JewelryItem[] = [
    { id: 1, name: "Stilla Ring", price: 150, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5693506_png/stilla-ring--round-cut--white--gold-tone-plated-swarovski-5693506.png" },
    { id: 2, name: "Duo Bangle", price: 120, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5692521_png_var1/matrix-necklace--mixed-cuts--white--rhodium-plated-swarovski-5692521.png" },
    { id: 3, name: "Swarovski Infinity Necklace", price: 200, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5702408_png_var1/hyperbola-choker--round-cut--white--mixed-metal-finish-swarovski-5702408.png" },
    { id: 4, name: "Attract Round Pendant", price: 130, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5692166_png/symbolica-pendant--evil-eye--medium--multicolored--gold-tone-plated-swarovski-5692166.png" },
    { id: 5, name: "Lovely Swan Pendant", price: 175, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5514421_png/swan-necklace--swan--white--rhodium-plated-swarovski-5514421.png" },
    { id: 6, name: "Crystalline Globe", price: 250, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5693206_png/dextera-pendant--round-cut--sphere--white--rhodium-plated-swarovski-5693206.png" },
    { id: 7, name: "Sparkling Dance Bracelet", price: 90, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5472382_png/una-bracelet--round-cut--oval-shape--white--rose-gold-tone-plated-swarovski-5472382.png" },
    { id: 8, name: "Swarovski Crystal Starfish", price: 110, imageUrl: "https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_1.0,f_auto,w_600/5689914_png/idyllia-cuff--crystal-pearls--starfish--multicolored--gold-tone-plated-swarovski-5689914.png" },
  ];
  
  return NextResponse.json(jewelryItems);
}


