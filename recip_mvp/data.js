const recipes = [
  {
    id: 1,
    recipeName: "春野菜のかき揚げ",
    ingredients: [
      { name: "にんじん", farmer: "農家A" },
      { name: "たまねぎ", farmer: "農家B" }
    ],
    steps: "材料を細切りにして、さっと揚げるだけ",
    farmer: {
      name: "農家A",
      photo: "images/farmerA.jpg",
      note: "朝5時から収穫しました",
      region: "長野県",
      season: "春"
    },
    photo: "images/recipe1.jpg"
  },
  {
    id: 2,
    recipeName: "夏野菜のラタトゥイユ",
    ingredients: [
      { name: "なす", farmer: "農家B" },
      { name: "ピーマン", farmer: "農家B" },
      { name: "トマト", farmer: "農家B" }
    ],
    steps: "野菜をざく切りにして、オリーブオイルで煮る",
    farmer: {
      name: "農家B",
      photo: "images/farmerB.jpg",
      note: "寒暖差で甘みが増しました",
      region: "千葉県",
      season: "夏"
    },
    photo: "images/recipe2.jpg"
  },
  {
    id: 3,
    recipeName: "秋のきのこスープ",
    ingredients: [
      { name: "しいたけ", farmer: "農家C" },
      { name: "しめじ", farmer: "農家C" },
      { name: "玉ねぎ", farmer: "農家C" }
    ],
    steps: "きのこを炒めて煮込み、塩で味を整える",
    farmer: {
      name: "農家C",
      photo: "images/farmerC.jpg",
      note: "手作業で丁寧に選別しています",
      region: "北海道",
      season: "秋"
    },
    photo: "images/recipe3.jpg"
  },
// 新しいレシピを追加する場合はこの形式でコピー
{
  id: 4, // 既存レシピのidの次の番号
  recipeName: "ここにレシピ名",
  ingredients: [
    { name: "材料1", farmer: "農家名" },
    { name: "材料2", farmer: "農家名" }
    // 材料3があれば追加
  ],
  steps: "作り方をここに",
  farmer: {
    name: "農家名",
    photo: "images/農家写真.jpg", // 画像ファイルを images/ に保存
    note: "農家の一言コメント",
    region: "産地",
    season: "旬"
  },
  photo: "images/レシピ写真.jpg" // 画像ファイルを images/ に保存
}
];
