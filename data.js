const effects = [

    // ==================================================
    // 光・発光
    // ==================================================

    {
        name: "Glow",
        type: "エフェクト",
        description: "映像や文字を発光させる",
        tags: ["光", "発光", "ネオン", "輝き", "明るい", "ぼかし", "オーラ"],
        purposes: ["文字を光らせる", "ロゴを光らせる", "ネオンを作る", "光を強調する"]
    },

    {
        name: "CC Light Rays",
        type: "エフェクト",
        description: "光が放射状に伸びる表現",
        tags: ["光", "光線", "放射", "神々しい", "太陽", "ビーム"],
        purposes: ["光線を作る", "後光を作る", "神々しい演出", "太陽の光"]
    },

    {
        name: "CC Light Burst 2.5",
        type: "エフェクト",
        description: "中心から光が爆発するような表現",
        tags: ["光", "爆発", "発光", "放射", "ビーム"],
        purposes: ["光を爆発させる", "登場演出", "派手な演出", "フラッシュ"]
    },

    {
        name: "CC Light Sweep",
        type: "エフェクト",
        description: "光が表面を横切るような表現",
        tags: ["光", "反射", "キラキラ", "ハイライト", "ロゴ"],
        purposes: ["文字を光らせる", "ロゴを輝かせる", "金属感を出す"]
    },

    {
        name: "Lens Flare",
        type: "エフェクト",
        description: "レンズフレアを追加する",
        tags: ["光", "レンズ", "フレア", "太陽", "映画"],
        purposes: ["レンズフレアを作る", "太陽を表現する", "映画っぽくする"]
    },

    {
        name: "CC Light Rays",
        type: "エフェクト",
        description: "光線を放射状に作る",
        tags: ["光", "光線", "後光", "放射"],
        purposes: ["後光を作る", "光線を作る", "神秘的にする"]
    },

    // ==================================================
    // ぼかし
    // ==================================================

    {
        name: "Gaussian Blur",
        type: "エフェクト",
        description: "映像を均一にぼかす",
        tags: ["ぼかし", "ブラー", "Blur", "柔らかい", "背景"],
        purposes: ["背景をぼかす", "文字をぼかす", "映像をぼかす", "ピントを外す"]
    },

    {
        name: "Fast Box Blur",
        type: "エフェクト",
        description: "高速なぼかしをかける",
        tags: ["ぼかし", "ブラー", "Blur", "高速"],
        purposes: ["映像をぼかす", "背景をぼかす", "柔らかくする"]
    },

    {
        name: "Camera Lens Blur",
        type: "エフェクト",
        description: "カメラレンズのようなぼけを作る",
        tags: ["ぼかし", "レンズ", "被写界深度", "カメラ", "ボケ"],
        purposes: ["背景をぼかす", "被写界深度を作る", "映画っぽくする"]
    },

    {
        name: "Radial Blur",
        type: "エフェクト",
        description: "中心から放射状にぼかす",
        tags: ["ぼかし", "放射", "ズーム", "回転", "スピード"],
        purposes: ["ズーム感を出す", "スピード感を出す", "回転ブラー"]
    },

    {
        name: "Directional Blur",
        type: "エフェクト",
        description: "指定した方向にぼかす",
        tags: ["ぼかし", "方向", "モーション", "スピード"],
        purposes: ["動きを強調する", "スピード感を出す", "モーションブラー"]
    },

    {
        name: "Smart Blur",
        type: "エフェクト",
        description: "輪郭を保ちながらぼかす",
        tags: ["ぼかし", "輪郭", "柔らかい"],
        purposes: ["映像を柔らかくする", "ノイズを減らす"]
    },

    {
        name: "Bilateral Blur",
        type: "エフェクト",
        description: "輪郭を維持しながら滑らかにする",
        tags: ["ぼかし", "滑らか", "輪郭", "ノイズ"],
        purposes: ["映像を滑らかにする", "ノイズを減らす"]
    },

    // ==================================================
    // 色・カラー
    // ==================================================

    {
        name: "Lumetri Color",
        type: "カラー",
        description: "映像の色や明るさを総合的に調整する",
        tags: ["色", "カラー", "色調補正", "明るさ", "コントラスト", "映画"],
        purposes: ["色を変える", "色味を調整する", "映画風にする", "カラーグレーディング"]
    },

    {
        name: "Curves",
        type: "カラー",
        description: "明るさやRGBを曲線で調整する",
        tags: ["色", "カラー", "明るさ", "コントラスト", "RGB"],
        purposes: ["明るさを調整する", "コントラストを調整する", "色を調整する"]
    },

    {
        name: "Levels",
        type: "カラー",
        description: "黒・白・中間調を調整する",
        tags: ["色", "明るさ", "コントラスト", "黒", "白"],
        purposes: ["明るさを調整する", "コントラストを強くする"]
    },

    {
        name: "Tint",
        type: "カラー",
        description: "映像を指定した2色で着色する",
        tags: ["色", "モノクロ", "着色", "単色"],
        purposes: ["映像をモノクロにする", "映像に色を付ける", "単色風にする"]
    },

    {
        name: "Tritone",
        type: "カラー",
        description: "3色を使って映像を着色する",
        tags: ["色", "カラー", "3色", "着色"],
        purposes: ["映像を着色する", "おしゃれな色にする"]
    },

    {
        name: "Hue/Saturation",
        type: "カラー",
        description: "色相・彩度・明度を調整する",
        tags: ["色", "色相", "彩度", "明度", "カラー"],
        purposes: ["色を変える", "彩度を上げる", "彩度を下げる"]
    },

    {
        name: "Color Balance",
        type: "カラー",
        description: "RGBのバランスを調整する",
        tags: ["色", "カラー", "RGB", "色調"],
        purposes: ["色味を調整する", "色かぶりを補正する"]
    },

    {
        name: "Black & White",
        type: "カラー",
        description: "映像をモノクロ化する",
        tags: ["モノクロ", "白黒", "カラー", "色"],
        purposes: ["白黒にする", "モノクロにする"]
    },

    {
        name: "Photo Filter",
        type: "カラー",
        description: "写真用フィルターのような色味を付ける",
        tags: ["色", "フィルター", "写真", "暖色", "寒色"],
        purposes: ["写真風にする", "色味を変える"]
    },

    {
        name: "Posterize",
        type: "カラー",
        description: "色の階調を減らしてポスター風にする",
        tags: ["色", "ポスター", "アニメ", "階調", "イラスト"],
        purposes: ["アニメ風にする", "ポスター風にする", "色数を減らす"]
    },

    // ==================================================
    // ノイズ・質感
    // ==================================================

    {
        name: "Fractal Noise",
        type: "ノイズ",
        description: "フラクタルノイズを生成する",
        tags: ["ノイズ", "煙", "雲", "炎", "霧", "質感", "テクスチャ"],
        purposes: ["煙を作る", "雲を作る", "炎の素材を作る", "霧を作る", "背景を作る"]
    },

    {
        name: "Turbulent Noise",
        type: "ノイズ",
        description: "複雑なノイズ模様を生成する",
        tags: ["ノイズ", "煙", "炎", "霧", "水", "テクスチャ"],
        purposes: ["煙を作る", "炎を作る", "霧を作る", "有機的な模様"]
    },

    {
        name: "Noise",
        type: "ノイズ",
        description: "映像にランダムなノイズを追加する",
        tags: ["ノイズ", "ザラザラ", "フィルム", "質感"],
        purposes: ["フィルム風にする", "ザラザラさせる", "ノイズを追加する"]
    },

    {
        name: "Add Grain",
        type: "ノイズ",
        description: "フィルムグレインを追加する",
        tags: ["ノイズ", "フィルム", "粒子", "映画", "質感"],
        purposes: ["フィルム風にする", "映画っぽくする", "粒子を追加する"]
    },

    {
        name: "Dust & Scratches",
        type: "ノイズ",
        description: "ほこりや傷のような質感を扱う",
        tags: ["ほこり", "傷", "フィルム", "古い", "レトロ"],
        purposes: ["古い映像にする", "フィルム風にする", "傷を表現する"]
    },

    // ==================================================
    // 変形
    // ==================================================

    {
        name: "Transform",
        type: "変形",
        description: "位置・回転・拡大縮小などを調整する",
        tags: ["変形", "移動", "回転", "拡大", "縮小", "位置"],
        purposes: ["画像を動かす", "回転させる", "拡大する", "縮小する"]
    },

    {
        name: "Turbulent Displace",
        type: "変形",
        description: "映像をランダムに歪ませる",
        tags: ["歪み", "変形", "波", "揺れ", "グニャグニャ", "ホラー"],
        purposes: ["映像を歪ませる", "文字を歪ませる", "ホラー演出", "揺らす"]
    },

    {
        name: "Wave Warp",
        type: "変形",
        description: "波のように映像を変形する",
        tags: ["波", "歪み", "変形", "揺れ", "水"],
        purposes: ["画面を揺らす", "波を作る", "水面を作る", "映像を歪ませる"]
    },

    {
        name: "Mesh Warp",
        type: "変形",
        description: "メッシュを使って映像を自由に変形する",
        tags: ["変形", "歪み", "メッシュ"],
        purposes: ["画像を変形する", "顔を変形する", "オブジェクトを歪ませる"]
    },

    {
        name: "Liquify",
        type: "変形",
        description: "画像を液体のように押したり引いたりする",
        tags: ["変形", "液体", "歪み", "顔"],
        purposes: ["画像を歪ませる", "顔を変形する", "液体っぽくする"]
    },

    {
        name: "Displacement Map",
        type: "変形",
        description: "別のレイヤーを使って映像を変形する",
        tags: ["変形", "歪み", "マップ", "波"],
        purposes: ["映像を歪ませる", "水面を作る", "文字を歪ませる"]
    },

    {
        name: "Optics Compensation",
        type: "変形",
        description: "レンズの歪みを再現・補正する",
        tags: ["レンズ", "歪み", "魚眼", "広角"],
        purposes: ["魚眼にする", "広角レンズ風にする", "レンズ歪み"]
    },

    // ==================================================
    // スタイライズ
    // ==================================================

    {
        name: "Find Edges",
        type: "スタイライズ",
        description: "映像の輪郭を抽出する",
        tags: ["輪郭", "線画", "エッジ", "アニメ", "イラスト"],
        purposes: ["線画にする", "輪郭を出す", "アニメ風にする"]
    },

    {
        name: "Roughen Edges",
        type: "スタイライズ",
        description: "輪郭をギザギザにして手描き風にする",
        tags: ["輪郭", "ギザギザ", "手描き", "ホラー", "紙"],
        purposes: ["手描き風にする", "ホラー演出", "紙っぽくする"]
    },

    {
        name: "Mosaic",
        type: "スタイライズ",
        description: "映像をモザイク状にする",
        tags: ["モザイク", "ドット", "ピクセル"],
        purposes: ["モザイクをかける", "ドット絵風にする", "ピクセル化する"]
    },

    {
        name: "CC Glass",
        type: "スタイライズ",
        description: "ガラスのような立体感を作る",
        tags: ["ガラス", "立体", "光", "反射"],
        purposes: ["ガラス風にする", "立体感を出す"]
    },

    {
        name: "Emboss",
        type: "スタイライズ",
        description: "映像を浮き彫り風にする",
        tags: ["立体", "浮き彫り", "金属", "質感"],
        purposes: ["浮き彫りにする", "立体感を出す", "金属風にする"]
    },

    {
        name: "Glow Edges",
        type: "スタイライズ",
        description: "輪郭を光らせる",
        tags: ["光", "輪郭", "ネオン", "発光"],
        purposes: ["輪郭を光らせる", "ネオン風にする"]
    },

    // ==================================================
    // グリッチ・デジタル
    // ==================================================

    {
        name: "Bad TV",
        type: "グリッチ",
        description: "壊れたテレビのような映像を作る",
        tags: ["グリッチ", "テレビ", "ノイズ", "故障", "ホラー", "VHS"],
        purposes: ["グリッチを作る", "VHS風にする", "ホラー演出"]
    },

    {
        name: "Turbulent Displace",
        type: "グリッチ",
        description: "映像を不規則に歪ませる",
        tags: ["グリッチ", "歪み", "ノイズ", "揺れ"],
        purposes: ["グリッチを作る", "映像を壊す", "画面を揺らす"]
    },

    {
        name: "Posterize Time",
        type: "グリッチ",
        description: "フレームレートを制限する",
        tags: ["カクカク", "コマ落ち", "アニメ", "グリッチ"],
        purposes: ["カクカクさせる", "コマ落ちさせる", "アニメ風にする"]
    },

    {
        name: "Wave Warp",
        type: "グリッチ",
        description: "映像を波状に歪ませる",
        tags: ["グリッチ", "歪み", "波", "揺れ"],
        purposes: ["画面を歪ませる", "グリッチを作る"]
    },

    // ==================================================
    // 動き・残像
    // ==================================================

    {
        name: "Echo",
        type: "モーション",
        description: "過去のフレームを残像として表示する",
        tags: ["残像", "モーション", "動き", "スピード"],
        purposes: ["残像を作る", "スピード感を出す", "複数に見せる"]
    },

    {
        name: "CC Force Motion Blur",
        type: "モーション",
        description: "動きに合わせたモーションブラーを追加する",
        tags: ["モーションブラー", "残像", "動き", "スピード"],
        purposes: ["動きを滑らかにする", "スピード感を出す"]
    },

    {
        name: "Motion Tile",
        type: "モーション",
        description: "映像を繰り返して画面外まで拡張する",
        tags: ["繰り返し", "背景", "タイル", "スクロール"],
        purposes: ["背景をループする", "画面を埋める", "無限背景を作る"]
    },

    // ==================================================
    // 影・立体
    // ==================================================

    {
        name: "Drop Shadow",
        type: "スタイライズ",
        description: "オブジェクトに影を付ける",
        tags: ["影", "シャドウ", "立体", "文字"],
        purposes: ["文字に影を付ける", "画像に影を付ける", "立体感を出す"]
    },

    {
        name: "CC Sphere",
        type: "3D",
        description: "2D画像を球体のように見せる",
        tags: ["3D", "球体", "立体", "惑星"],
        purposes: ["惑星を作る", "球体を作る", "立体化する"]
    },

    {
        name: "CC Cylinder",
        type: "3D",
        description: "映像を円柱状に変形する",
        tags: ["3D", "円柱", "立体"],
        purposes: ["円柱を作る", "立体的にする"]
    },

    // ==================================================
    // パターン・背景
    // ==================================================

    {
        name: "Cell Pattern",
        type: "生成",
        description: "セル状のパターンを生成する",
        tags: ["パターン", "背景", "模様", "テクスチャ"],
        purposes: ["背景を作る", "模様を作る", "テクスチャを作る"]
    },

    {
        name: "Checkerboard",
        type: "生成",
        description: "チェック柄を生成する",
        tags: ["チェック", "背景", "パターン", "模様"],
        purposes: ["チェック柄を作る", "背景を作る"]
    },

    {
        name: "Grid",
        type: "生成",
        description: "グリッドを生成する",
        tags: ["グリッド", "線", "背景", "UI"],
        purposes: ["グリッドを作る", "背景を作る", "UI素材を作る"]
    },

    {
        name: "Fractal",
        type: "生成",
        description: "フラクタル模様を生成する",
        tags: ["フラクタル", "模様", "背景", "抽象"],
        purposes: ["抽象背景を作る", "模様を作る"]
    },

    {
        name: "Gradient Ramp",
        type: "生成",
        description: "グラデーションを生成する",
        tags: ["グラデーション", "背景", "色"],
        purposes: ["背景を作る", "グラデーションを作る"]
    },

    {
        name: "4-Color Gradient",
        type: "生成",
        description: "4色を使ったグラデーションを作る",
        tags: ["グラデーション", "背景", "色", "カラフル"],
        purposes: ["背景を作る", "おしゃれな背景を作る"]
    },

    // ==================================================
    // シミュレーション
    // ==================================================

    {
        name: "CC Particle World",
        type: "シミュレーション",
        description: "3Dパーティクルを生成する",
        tags: ["パーティクル", "粒子", "煙", "爆発", "火花", "3D"],
        purposes: ["粒子を作る", "火花を作る", "煙を作る", "爆発を作る"]
    },

    {
        name: "CC Particle Systems II",
        type: "シミュレーション",
        description: "パーティクルを生成する",
        tags: ["パーティクル", "粒子", "雨", "雪", "火花"],
        purposes: ["雨を作る", "雪を作る", "火花を作る", "粒子を作る"]
    },

    {
        name: "CC Bubbles",
        type: "シミュレーション",
        description: "泡のようなパーティクルを生成する",
        tags: ["泡", "水", "パーティクル", "粒子"],
        purposes: ["泡を作る", "水中表現を作る"]
    },

    // ==================================================
    // トランジション
    // ==================================================

    {
        name: "Linear Wipe",
        type: "トランジション",
        description: "直線状に映像を切り替える",
        tags: ["ワイプ", "トランジション", "切り替え", "マスク"],
        purposes: ["画面を切り替える", "トランジションを作る"]
    },

    {
        name: "Radial Wipe",
        type: "トランジション",
        description: "円形に映像を切り替える",
        tags: ["ワイプ", "円", "トランジション", "切り替え"],
        purposes: ["円形トランジション", "画面を切り替える"]
    },

    {
        name: "Venetian Blinds",
        type: "トランジション",
        description: "ブラインド状に映像を切り替える",
        tags: ["ワイプ", "ブラインド", "切り替え", "トランジション"],
        purposes: ["トランジションを作る", "画面を切り替える"]
    },

    {
        name: "Linear Wipe",
        type: "トランジション",
        description: "直線的に表示・非表示を切り替える",
        tags: ["切り替え", "ワイプ", "表示", "非表示"],
        purposes: ["画像を出現させる", "画像を消す"]
    },

    // ==================================================
    // キーイング
    // ==================================================

    {
        name: "Keylight",
        type: "キーイング",
        description: "特定の色を抜いて透明化する",
        tags: ["クロマキー", "緑", "背景削除", "透明", "キーイング"],
        purposes: ["緑背景を消す", "背景を抜く", "人物を切り抜く"]
    },

    {
        name: "Key Cleaner",
        type: "キーイング",
        description: "キーイング結果のエッジを整える",
        tags: ["キーイング", "切り抜き", "エッジ", "緑"],
        purposes: ["切り抜きを綺麗にする", "緑を消す"]
    },

    {
        name: "Advanced Spill Suppressor",
        type: "キーイング",
        description: "クロマキーによる色かぶりを補正する",
        tags: ["クロマキー", "緑", "色かぶり", "キーイング"],
        purposes: ["緑かぶりを消す", "人物を綺麗に切り抜く"]
    },

    // ==================================================
    // チャンネル
    // ==================================================

    {
        name: "Set Channels",
        type: "チャンネル",
        description: "RGBやアルファチャンネルを設定する",
        tags: ["RGB", "アルファ", "チャンネル", "透明"],
        purposes: ["アルファを操作する", "チャンネルを変更する"]
    },

    {
        name: "Shift Channels",
        type: "チャンネル",
        description: "チャンネルの割り当てを変更する",
        tags: ["RGB", "チャンネル", "色"],
        purposes: ["色を入れ替える", "チャンネルを操作する"]
    },

    {
        name: "Invert",
        type: "チャンネル",
        description: "色を反転する",
        tags: ["反転", "色", "ネガ", "白黒"],
        purposes: ["色を反転する", "ネガフィルム風にする"]
    },

    // ==================================================
    // シャープ・ディテール
    // ==================================================

    {
        name: "Sharpen",
        type: "ディテール",
        description: "映像をシャープにする",
        tags: ["シャープ", "鮮明", "くっきり", "輪郭"],
        purposes: ["映像をくっきりさせる", "ぼやけを補正する"]
    },

    {
        name: "Unsharp Mask",
        type: "ディテール",
        description: "輪郭を強調してシャープにする",
        tags: ["シャープ", "輪郭", "鮮明", "くっきり"],
        purposes: ["映像を鮮明にする", "輪郭を強調する"]
    },

    // ==================================================
    // 遠近・レンズ
    // ==================================================

    {
        name: "Basic 3D",
        type: "3D",
        description: "2Dレイヤーに簡易的な3D回転や光を追加する",
        tags: ["3D", "回転", "立体", "光"],
        purposes: ["画像を3D風にする", "立体的にする"]
    },

    {
        name: "CC Power Pin",
        type: "変形",
        description: "四隅を自由に動かして遠近変形する",
        tags: ["遠近", "変形", "パース", "画面"],
        purposes: ["画面を斜めにする", "看板に映像を貼る", "パースを合わせる"]
    },

    {
        name: "Corner Pin",
        type: "変形",
        description: "4つの角を自由に変形する",
        tags: ["変形", "遠近", "パース", "画面"],
        purposes: ["画面を貼り付ける", "遠近感を合わせる"]
    },

    // ==================================================
    // 描画・線
    // ==================================================

    {
        name: "Write-on",
        type: "描画",
        description: "線が描かれていくようなアニメーションを作る",
        tags: ["描画", "線", "手書き", "文字", "アニメーション"],
        purposes: ["手書き文字を作る", "線を描く", "書き順を表現する"]
    },

    {
        name: "Vegas",
        type: "描画",
        description: "マスクパスに沿って線を描画する",
        tags: ["線", "輪郭", "マスク", "描画", "ネオン"],
        purposes: ["輪郭を光らせる", "線を描く", "ネオンを作る"]
    },

    // ==================================================
    // 時間・フレーム
    // ==================================================

    {
        name: "Posterize Time",
        type: "時間",
        description: "レイヤーのフレームレートを制限する",
        tags: ["時間", "カクカク", "コマ落ち", "アニメ"],
        purposes: ["カクカクさせる", "コマ落ちさせる", "アニメ風にする"]
    },

    {
        name: "Timewarp",
        type: "時間",
        description: "映像の時間や速度を変化させる",
        tags: ["時間", "速度", "スロー", "早送り"],
        purposes: ["スローにする", "速度を変える", "時間を操作する"]
    },

    // ==================================================
    // その他・演出
    // ==================================================

    {
        name: "Echo",
        type: "エフェクト",
        description: "過去の映像を重ねて残像を作る",
        tags: ["残像", "幽霊", "動き", "スピード", "ホラー"],
        purposes: ["残像を作る", "幽霊っぽくする", "スピード感を出す"]
    },

    {
        name: "Exposure",
        type: "カラー",
        description: "露出やガンマを調整する",
        tags: ["明るさ", "露出", "カラー", "暗い", "明るい"],
        purposes: ["映像を明るくする", "映像を暗くする", "露出を調整する"]
    },

    {
        name: "Threshold",
        type: "カラー",
        description: "映像を白黒の二値に変換する",
        tags: ["白黒", "二値", "コントラスト", "シルエット"],
        purposes: ["シルエットを作る", "白黒にする", "二値化する"]
    },

    {
        name: "CC Toner",
        type: "カラー",
        description: "映像を指定した色調に変換する",
        tags: ["カラー", "着色", "色", "モノクロ"],
        purposes: ["映像を青くする", "映像を赤くする", "色を統一する"]
    },

    {
        name: "Channel Mixer",
        type: "カラー",
        description: "RGBチャンネルを混ぜ合わせて色を調整する",
        tags: ["RGB", "色", "カラー", "チャンネル"],
        purposes: ["色を作る", "色味を変える", "RGBを調整する"]
    },

    {
        name: "Gradient Ramp",
        type: "生成",
        description: "2色のグラデーションを生成する",
        tags: ["背景", "グラデーション", "色", "光"],
        purposes: ["背景を作る", "光の背景を作る", "グラデーションを作る"]
    },

    {
        name: "CC Kaleida",
        type: "スタイライズ",
        description: "映像を万華鏡のように反復する",
        tags: ["万華鏡", "反復", "模様", "抽象", "ミュージックビデオ"],
        purposes: ["万華鏡を作る", "抽象映像を作る", "MV背景を作る"]
    },

    {
        name: "CC Ball Action",
        type: "スタイライズ",
        description: "映像を粒状の球体に変換する",
        tags: ["粒子", "球", "分解", "消滅", "3D"],
        purposes: ["画像を粒子化する", "消滅演出", "分解演出"]
    },

    {
        name: "CC Scatterize",
        type: "スタイライズ",
        description: "映像を粒子状に散らす",
        tags: ["粒子", "分解", "消滅", "散る"],
        purposes: ["消滅させる", "粒子にする", "散らす"]
    },

    {
        name: "CC Threshold",
        type: "カラー",
        description: "映像を二値化する",
        tags: ["白黒", "二値", "シルエット", "コントラスト"],
        purposes: ["シルエットを作る", "白黒にする"]
    },

    {
        name: "CC Burn Film",
        type: "カラー",
        description: "フィルムが焼けたような色変化を作る",
        tags: ["フィルム", "焼け", "レトロ", "光", "映画"],
        purposes: ["フィルム風にする", "レトロ映像を作る"]
    },

    {
        name: "CC Glass",
        type: "スタイライズ",
        description: "ガラスや凹凸のような立体感を作る",
        tags: ["ガラス", "凹凸", "立体", "質感"],
        purposes: ["ガラス風にする", "立体感を出す"]
    },

    {
        name: "CC Plastic",
        type: "スタイライズ",
        description: "プラスチックのような質感を作る",
        tags: ["プラスチック", "質感", "光沢", "立体"],
        purposes: ["光沢を出す", "プラスチック風にする"]
    },

    {
        name: "CC Drizzle",
        type: "シミュレーション",
        description: "水滴や雨のような表現を作る",
        tags: ["雨", "水滴", "水", "天気"],
        purposes: ["雨を作る", "水滴を作る", "雨の日を表現する"]
    },

    {
        name: "CC Rainfall",
        type: "シミュレーション",
        description: "雨のパーティクルを生成する",
        tags: ["雨", "水", "パーティクル", "天気"],
        purposes: ["雨を作る", "雨の背景を作る"]
    },

    {
        name: "CC Snowfall",
        type: "シミュレーション",
        description: "雪のパーティクルを生成する",
        tags: ["雪", "冬", "パーティクル", "天気"],
        purposes: ["雪を作る", "雪景色を作る"]
    },

    {
        name: "CC Mr. Mercury",
        type: "シミュレーション",
        description: "液体金属のようなパーティクルを作る",
        tags: ["液体", "金属", "粒子", "有機", "煙"],
        purposes: ["液体を作る", "有機的な動きを作る"]
    },

    {
        name: "CC Glue Gun",
        type: "シミュレーション",
        description: "粘着質な液体のような表現を作る",
        tags: ["液体", "粘液", "有機", "ホラー"],
        purposes: ["液体を作る", "粘液を作る", "ホラー演出"]
    },

    {
        name: "CC Mercury",
        type: "シミュレーション",
        description: "金属液体のような表現を作る",
        tags: ["液体", "金属", "パーティクル"],
        purposes: ["液体金属を作る", "有機的な演出"]
    },

    {
        name: "Minimax",
        type: "マット",
        description: "明るい部分や暗い部分を拡張・縮小する",
        tags: ["マット", "拡張", "縮小", "輪郭", "文字"],
        purposes: ["文字を太くする", "マスクを広げる", "輪郭を作る"]
    },

    {
        name: "Simple Choker",
        type: "マット",
        description: "アルファチャンネルの境界を調整する",
        tags: ["マット", "透明", "切り抜き", "輪郭"],
        purposes: ["切り抜きを調整する", "輪郭を整える"]
    },

    {
        name: "Refine Matte",
        type: "マット",
        description: "マットのエッジを調整する",
        tags: ["マット", "切り抜き", "エッジ", "透明"],
        purposes: ["切り抜きを綺麗にする", "エッジを整える"]
    },

    {
        name: "Set Matte",
        type: "マット",
        description: "別レイヤーの情報をマットとして使用する",
        tags: ["マット", "透明", "アルファ", "切り抜き"],
        purposes: ["別レイヤーで切り抜く", "透明部分を作る"]
    },

    {
        name: "Track Matte",
        type: "マット",
        description: "別レイヤーを使って表示範囲を制御する",
        tags: ["マット", "切り抜き", "透明", "マスク"],
        purposes: ["文字で映像を切り抜く", "画像をマスクする"]
    },

    {
        name: "Fill",
        type: "カラー",
        description: "レイヤーを指定した色で塗りつぶす",
        tags: ["色", "塗り", "カラー", "単色"],
        purposes: ["色を変える", "シルエットを作る", "単色化する"]
    },

    {
        name: "CC Composite",
        type: "合成",
        description: "元の映像とエフェクト後の映像を合成する",
        tags: ["合成", "ブレンド", "レイヤー"],
        purposes: ["エフェクトを合成する", "元映像を残す"]
    },

    {
        name: "Set Channels",
        type: "合成",
        description: "チャンネル情報を別のチャンネルとして設定する",
        tags: ["合成", "アルファ", "RGB", "透明"],
        purposes: ["アルファを作る", "チャンネルを操作する"]
    },

    {
        name: "Compound Blur",
        type: "ブラー",
        description: "別レイヤーの明るさを使ってぼかす",
        tags: ["ぼかし", "深度", "マップ", "背景"],
        purposes: ["深度ぼけを作る", "部分的にぼかす"]
    },

    {
        name: "Directional Blur",
        type: "ブラー",
        description: "方向を指定してぼかす",
        tags: ["ぼかし", "方向", "速度", "モーション"],
        purposes: ["スピード感を出す", "動きをぼかす"]
    },

    {
        name: "Radial Blur",
        type: "ブラー",
        description: "回転・ズーム方向のぼかしを作る",
        tags: ["ぼかし", "回転", "ズーム", "速度"],
        purposes: ["ズーム演出", "回転演出", "スピード感"]
    },

    {
        name: "CC Radial Fast Blur",
        type: "ブラー",
        description: "高速な放射状ぼかしを作る",
        tags: ["ぼかし", "ズーム", "放射", "速度"],
        purposes: ["ズーム演出", "スピード感"]
    },

    {
        name: "Reduce Interlace Flicker",
        type: "映像補正",
        description: "インターレース映像のちらつきを軽減する",
        tags: ["ちらつき", "補正", "インターレース", "映像"],
        purposes: ["ちらつきを減らす", "映像を補正する"]
    },

    {
        name: "Rolling Shutter Repair",
        type: "映像補正",
        description: "ローリングシャッターによる歪みを補正する",
        tags: ["補正", "カメラ", "歪み", "ローリングシャッター"],
        purposes: ["カメラ映像を補正する", "歪みを直す"]
    },
    // ==================================================
    // Expressions
    // ==================================================

    {
        name: "Wiggle",
        type: "Expression",
        description: "レイヤーをランダムに揺らす",
        tags: ["揺れ", "振動", "ブレ", "ランダム", "ウィグル"],
        purposes: ["画面を揺らす", "文字を揺らす", "カメラを揺らす", "ホラー演出"],
        code: "wiggle(5, 20);"
    },

    {
        name: "点滅",
        type: "Expression",
        description: "レイヤーをランダムまたは一定間隔で点滅させる",
        tags: ["点滅", "明滅", "光", "発光", "ランダム"],
        purposes: ["文字を点滅させる", "ライトを点滅させる", "ホラー演出"],
        code: "posterizeTime(8);\\nrandom() > 0.5 ? 100 : 0;"
    },

    {
        name: "ランダム位置",
        type: "Expression",
        description: "レイヤーの位置をランダムに変化させる",
        tags: ["ランダム", "位置", "動き", "揺れ"],
        purposes: ["ランダムに動かす", "画面を揺らす", "不規則な動き"],
        code: "[random(0, 1920), random(0, 1080)]"
    },

    {
        name: "自動回転",
        type: "Expression",
        description: "レイヤーを自動的に回転させる",
        tags: ["回転", "自動", "ループ", "動き"],
        purposes: ["自動で回転させる", "オブジェクトを回す"],
        code: "time * 100;"
    },

    {
        name: "ループ",
        type: "Expression",
        description: "アニメーションを繰り返す",
        tags: ["ループ", "繰り返し", "リピート", "アニメーション"],
        purposes: ["アニメーションをループさせる", "繰り返す"],
        code: "loopOut('cycle');"
    },

    {
        name: "ランダムカラー",
        type: "Expression",
        description: "色をランダムに変化させる",
        tags: ["色", "カラー", "ランダム", "色変更"],
        purposes: ["色をランダムに変える", "文字色を変える"],
        code: "[random(), random(), random(), 1];"
    },

    {
        name: "カウントアップ",
        type: "Expression",
        description: "数字を自動的にカウントアップさせる",
        tags: ["数字", "カウント", "数値", "テキスト"],
        purposes: ["数字をカウントする", "カウンターを作る", "数字演出"],
        code: "Math.floor(time * 10);"
    },

    {
        name: "不透明度フェード",
        type: "Expression",
        description: "時間に合わせて透明度を変化させる",
        tags: ["透明", "フェード", "不透明度", "出現", "消える"],
        purposes: ["フェードイン", "フェードアウト", "文字を出現させる"],
        code: "linear(time, 0, 1, 0, 100);"
    },

    {
        name: "ランダム点滅",
        type: "Expression",
        description: "不規則に点滅する",
        tags: ["点滅", "ランダム", "ホラー", "光"],
        purposes: ["ライトを点滅させる", "ホラー演出", "ネオンを点滅させる"],
        code: "posterizeTime(12);\\nrandom(0, 100);"
    },

    {
        name: "バウンド",
        type: "Expression",
        description: "跳ね返るような動きを作る",
        tags: ["バウンド", "跳ねる", "弾む", "動き"],
        purposes: ["文字を弾ませる", "オブジェクトを跳ねさせる"],
        code: "amp = 20;\\nfreq = 3;\\ndecay = 5;\\nt = time - inPoint;\\nvalue + amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);"
    }
,
{
    name: "Wiggle（揺れ）",
    type: "Expression",
    description: "レイヤーの位置をランダムに揺らす定番Expression。",
    purposes: [
        "手ブレ風",
        "画面揺れ",
        "不安定な動き",
        "ホラー演出"
    ],
    tags: [
        "歪み",
        "ホラー"
    ],
    code: `wiggle(8, 20);`
},

{
    name: "Wiggle（回転）",
    type: "Expression",
    description: "レイヤーをランダムに回転させる。",
    purposes: [
        "揺れ",
        "手ブレ",
        "不安定な演出"
    ],
    tags: [
        "歪み",
        "ホラー"
    ],
    code: `wiggle(5, 10);`
},

{
    name: "ループ",
    type: "Expression",
    description: "キーフレームの動きを繰り返す。",
    purposes: [
        "無限ループ",
        "繰り返しアニメーション",
        "背景アニメーション"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `loopOut("cycle");`
},

{
    name: "ループ（反復）",
    type: "Expression",
    description: "キーフレームを往復させるように繰り返す。",
    purposes: [
        "往復運動",
        "点滅",
        "揺れ"
    ],
    tags: [
        "光",
        "文字"
    ],
    code: `loopOut("pingpong");`
},

{
    name: "ランダム値",
    type: "Expression",
    description: "値をランダムに変化させる。",
    purposes: [
        "ランダム演出",
        "ノイズ的変化",
        "不規則な動き"
    ],
    tags: [
        "ノイズ",
        "歪み"
    ],
    code: `random(0, 100);`
},

{
    name: "Random Seed",
    type: "Expression",
    description: "ランダム値のパターンを固定して再現可能にする。",
    purposes: [
        "ランダム演出の固定",
        "毎回同じランダム値"
    ],
    tags: [
        "ノイズ"
    ],
    code: `seedRandom(1, true);
random(0, 100);`
},

{
    name: "点滅",
    type: "Expression",
    description: "不透明度を一定間隔で切り替えて点滅させる。",
    purposes: [
        "点滅",
        "ネオン",
        "警告ランプ",
        "ホラー"
    ],
    tags: [
        "光",
        "ホラー"
    ],
    code: `posterizeTime(8);
random(0, 1) > 0.5 ? 100 : 0;`
},

{
    name: "高速点滅",
    type: "Expression",
    description: "高速でON/OFFを切り替える点滅演出。",
    purposes: [
        "フラッシュ",
        "警告",
        "グリッチ",
        "ホラー"
    ],
    tags: [
        "光",
        "ノイズ",
        "ホラー"
    ],
    code: `posterizeTime(15);
random() > 0.5 ? 100 : 0;`
},

{
    name: "時間で回転",
    type: "Expression",
    description: "時間の経過に合わせてオブジェクトを回転させ続ける。",
    purposes: [
        "回転",
        "無限回転",
        "背景演出"
    ],
    tags: [
        "3D"
    ],
    code: `time * 60;`
},

{
    name: "時間で移動",
    type: "Expression",
    description: "時間を使ってレイヤーを一定速度で移動させる。",
    purposes: [
        "横移動",
        "自動スクロール",
        "流れる背景"
    ],
    tags: [
        "3D"
    ],
    code: `[value[0] + time * 100, value[1]];`
},

{
    name: "イーズイン",
    type: "Expression",
    description: "値を滑らかに変化させるための補間。",
    purposes: [
        "滑らかな動き",
        "速度調整",
        "アニメーション"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `ease(time, 0, 1, 0, 100);`
},

{
    name: "Linear補間",
    type: "Expression",
    description: "2つの値の間を一定速度で変化させる。",
    purposes: [
        "数値変化",
        "位置移動",
        "カラー制御"
    ],
    tags: [
        "色",
        "3D"
    ],
    code: `linear(time, 0, 1, 0, 100);`
},

{
    name: "レイヤーの遅延",
    type: "Expression",
    description: "レイヤー番号に応じてアニメーション開始をずらす。",
    purposes: [
        "文字を順番に出す",
        "連続アニメーション",
        "複数レイヤー"
    ],
    tags: [
        "文字"
    ],
    code: `delay = 0.08 * (index - 1);
thisComp.layer("TEXT").transform.position.valueAtTime(time - delay);`
},

{
    name: "文字のランダム化",
    type: "Expression",
    description: "文字にランダムな変化を与えるためのExpression。",
    purposes: [
        "デジタル文字",
        "ホラー文字",
        "グリッチ文字"
    ],
    tags: [
        "文字",
        "ノイズ",
        "ホラー"
    ],
    code: `posterizeTime(12);
random(0, 100);`
},

{
    name: "残像",
    type: "Expression",
    description: "高速移動に合わせて残像的な変化を作るための補助Expression。",
    purposes: [
        "スピード感",
        "高速移動",
        "アクション演出"
    ],
    tags: [
        "歪み",
        "光"
    ],
    code: `valueAtTime(time - 0.08);`
},

{
    name: "過去の値を取得",
    type: "Expression",
    description: "少し前の時間のプロパティ値を取得する。",
    purposes: [
        "残像",
        "遅延",
        "トレイル"
    ],
    tags: [
        "歪み",
        "光"
    ],
    code: `valueAtTime(time - 0.1);`
},

{
    name: "現在値を維持",
    type: "Expression",
    description: "現在のキーフレーム値をそのまま使用する。",
    purposes: [
        "Expressionのベース",
        "値の固定",
        "調整"
    ],
    tags: [
        "3D"
    ],
    code: `value;`
},

{
    name: "ランダムな位置",
    type: "Expression",
    description: "レイヤーの位置をランダムに変更する。",
    purposes: [
        "ランダム配置",
        "ノイズ",
        "ホラー",
        "不規則な動き"
    ],
    tags: [
        "ノイズ",
        "歪み",
        "ホラー"
    ],
    code: `wiggle(4, 50);`
},

{
    name: "ランダムなスケール",
    type: "Expression",
    description: "スケールをランダムに変化させる。",
    purposes: [
        "脈動",
        "不安定な文字",
        "ホラー演出"
    ],
    tags: [
        "文字",
        "ホラー",
        "歪み"
    ],
    code: `[random(95, 105), random(95, 105)];`
},

{
    name: "ランダムな回転",
    type: "Expression",
    description: "回転角度をランダムに変化させる。",
    purposes: [
        "揺れ",
        "ホラー",
        "不安定なオブジェクト"
    ],
    tags: [
        "歪み",
        "ホラー"
    ],
    code: `random(-10, 10);`
},

{
    name: "パルス発光",
    type: "Expression",
    description: "時間に合わせて明るさを周期的に変化させる。",
    purposes: [
        "ネオン",
        "点滅",
        "呼吸する光"
    ],
    tags: [
        "光"
    ],
    code: `50 + Math.sin(time * 5) * 50;`
},

{
    name: "波のような動き",
    type: "Expression",
    description: "Sin波を使って上下に揺れるような動きを作る。",
    purposes: [
        "浮遊",
        "波",
        "水面",
        "ゆらゆら"
    ],
    tags: [
        "歪み",
        "3D"
    ],
    code: `[value[0], value[1] + Math.sin(time * 3) * 30];`
},

{
    name: "呼吸するスケール",
    type: "Expression",
    description: "オブジェクトがゆっくり膨らんだり縮んだりする。",
    purposes: [
        "呼吸",
        "脈動",
        "ホラー",
        "生物的演出"
    ],
    tags: [
        "ホラー",
        "3D"
    ],
    code: `
s = 100 + Math.sin(time * 2) * 5;
[s, s];
`
},

{
    name: "自動スクロール",
    type: "Expression",
    description: "レイヤーを一定速度で横方向へ流し続ける。",
    purposes: [
        "背景",
        "スタッフロール",
        "ループ映像"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `
speed = 100;
[value[0] - time * speed, value[1]];
`
},

{
    name: "カラーサイクル",
    type: "Expression",
    description: "時間によって色相を連続的に変化させるためのExpression。",
    purposes: [
        "色変化",
        "ネオン",
        "サイバー演出"
    ],
    tags: [
        "色",
        "光"
    ],
    code: `
hslToRgb([
    (time * 0.1) % 1,
    1,
    0.5
]);
`
},

{
    name: "グリッチ風位置",
    type: "Expression",
    description: "位置を高速でランダム変化させてグリッチ風の動きを作る。",
    purposes: [
        "グリッチ",
        "VHS",
        "故障演出",
        "ホラー"
    ],
    tags: [
        "ノイズ",
        "歪み",
        "ホラー"
    ],
    code: `
posterizeTime(12);
wiggle(20, 15);
`
},

{
    name: "グリッチ風スケール",
    type: "Expression",
    description: "高速でスケールを揺らしてデジタルノイズ感を出す。",
    purposes: [
        "グリッチ",
        "VHS",
        "デジタル演出"
    ],
    tags: [
        "ノイズ",
        "歪み"
    ],
    code: `
posterizeTime(12);
s = random(98, 102);
[s, s];
`
},

{
    name: "3D奥行き移動",
    type: "Expression",
    description: "3DレイヤーのZ位置を時間で変化させる。",
    purposes: [
        "奥行き",
        "ズーム",
        "3D空間"
    ],
    tags: [
        "3D"
    ],
    code: `
[value[0], value[1], value[2] + time * 100];
`
},

{
    name: "3D回転",
    type: "Expression",
    description: "3Dレイヤーを時間に合わせて回転させ続ける。",
    purposes: [
        "3Dオブジェクト",
        "無限回転",
        "背景演出"
    ],
    tags: [
        "3D"
    ],
    code: `
[value[0] + time * 20, value[1], value[2]];
`
},

{
    name: "ランダム点滅",
    type: "Expression",
    description: "不規則な間隔で明滅する演出。",
    purposes: [
        "蛍光灯",
        "ホラー",
        "故障",
        "ネオン"
    ],
    tags: [
        "光",
        "ホラー",
        "ノイズ"
    ],
    code: `
posterizeTime(6);
random() > 0.7 ? 100 : 20;
`
}
,
    
/* =========================
   BLUR / SHARPEN
========================= */

{
    name: "ブラー(ガウス)",
    type: "Blur & Sharpen",
    description: "画像や文字を滑らかにぼかす定番のブラー。",
    purposes: [
        "背景をぼかす",
        "文字を柔らかくする",
        "被写界深度風",
        "光を広げる"
    ],
    tags: ["歪み", "光"]
},

{
    name: "高速ボックスブラー",
    type: "Blur & Sharpen",
    description: "高速処理向けのシンプルなブラー。",
    purposes: [
        "背景ぼかし",
        "柔らかい映像",
        "高速なぼかし"
    ],
    tags: ["歪み", "光"]
},

{
    name: "ブラー(方向）",
    type: "Blur & Sharpen",
    description: "指定した方向へ伸びるようにぼかす。",
    purposes: [
        "スピード感",
        "モーション風",
        "横方向のブラー",
        "縦方向のブラー"
    ],
    tags: ["歪み", "光"]
},

{
    name: "ブラー(放射状)",
    type: "Blur & Sharpen",
    description: "中心から放射状に広がるブラーを作る。",
    purposes: [
        "ズーム演出",
        "スピード感",
        "衝撃演出"
    ],
    tags: ["歪み", "光"]
},

{
    name: "CC Radial Blur",
    type: "Blur & Sharpen",
    description: "中心を基準に放射状のブラーを加えるCC系エフェクト。",
    purposes: [
        "ズーム",
        "高速移動",
        "衝撃"
    ],
    tags: ["歪み", "光"]
},

{
    name: "CC Radial Fast Blur",
    type: "Blur & Sharpen",
    description: "高速な放射状ブラーを作る。",
    purposes: [
        "ズーム",
        "スピード感",
        "フラッシュ"
    ],
    tags: ["歪み", "光"]
},

{
    name: "CC Vector Blur",
    type: "Blur & Sharpen",
    description: "ベクトル情報を使って画像を変形させながらぼかす。",
    purposes: [
        "特殊なぼかし",
        "液体表現",
        "有機的な歪み"
    ],
    tags: ["歪み"]
},

{
    name: "ブラー(カメラレンズ)",
    type: "Blur & Sharpen",
    description: "カメラレンズの被写界深度に近いぼかしを作る。",
    purposes: [
        "被写界深度",
        "背景ぼかし",
        "映画風"
    ],
    tags: ["3D", "光"]
},

{
    name: "シャープ",
    type: "Blur & Sharpen",
    description: "映像の輪郭を強調してシャープにする。",
    purposes: [
        "映像をくっきりさせる",
        "文字を見やすくする",
        "ディテール強調"
    ],
    tags: ["色"]
},

{
    name: "アンシャープマスク",
    type: "Blur & Sharpen",
    description: "輪郭を強調して細部をはっきり見せる。",
    purposes: [
        "シャープ化",
        "映像補正",
        "ディテール強調"
    ],
    tags: ["色"] 
},


/* =========================
   COLOR
========================= */

{
    name: "色相/彩度",
    type: "Color Correction",
    description: "色相・彩度・明度を調整する定番のカラー補正。",
    purposes: [
        "色変更",
        "彩度調整",
        "色味変更"
    ],
    tags: ["色"]
},

{
    name: "トーンカーブ",
    type: "Color Correction",
    description: "RGBの階調をカーブで細かく調整する。",
    purposes: [
        "カラーグレーディング",
        "コントラスト調整",
        "映画風"
    ],
    tags: ["色"]
},

{
    name: "レベル補正",
    type: "Color Correction",
    description: "シャドウ・中間調・ハイライトを調整する。",
    purposes: [
        "明るさ調整",
        "コントラスト調整",
        "映像補正"
    ],
    tags: ["色"]
},

{
    name: "露出",
    type: "Color Correction",
    description: "映像の露出を調整して明るさを変える。",
    purposes: [
        "明るくする",
        "暗くする",
        "HDR風"
    ],
    tags: ["色", "光"]
},

{
    name: "輝度＆コントラスト",
    type: "Color Correction",
    description: "映像の明るさとコントラストを調整する。",
    purposes: [
        "映像補正",
        "コントラスト強調",
        "雰囲気調整"
    ],
    tags: ["色"]
},

{
    name: "カラーバランス",
    type: "Color Correction",
    description: "シャドウ・中間調・ハイライトの色味を調整する。",
    purposes: [
        "色かぶり補正",
        "映画風",
        "カラーグレーディング"
    ],
    tags: ["色"]
},

{
    name: "カラーバランス (HLS)",
    type: "Color Correction",
    description: "HLSベースで映像の色味を調整する。",
    purposes: [
        "色味調整",
        "カラーグレーディング"
    ],
    tags: ["色"]
},

{
    name: "自然な彩度",
    type: "Color Correction",
    description: "色が強すぎない部分を中心に彩度を調整する。",
    purposes: [
        "自然な色調整",
        "彩度アップ",
        "カラー補正"
    ],
    tags: ["色"]
},

{
    name: "白黒",
    type: "Color Correction",
    description: "映像をモノクロ化する。",
    purposes: [
        "白黒映像",
        "映画風",
        "回想シーン"
    ],
    tags: ["色"]
},

{
    name: "色かぶり補正",
    type: "Color Correction",
    description: "映像全体の色味を特定のカラーへ調整する。",
    purposes: [
        "色味変更",
        "雰囲気作り",
        "映画風"
    ],
    tags: ["色"]
},

{
    name: "トライトーン",
    type: "Color Correction",
    description: "シャドウ・中間調・ハイライトを別の色に置き換える。",
    purposes: [
        "映画風",
        "カラー演出",
        "独特な色調"
    ],
    tags: ["色"]
},

{
    name: "色を変更",
    type: "Color Correction",
    description: "指定した色を別の色へ置き換える。",
    purposes: [
        "服の色変更",
        "文字色変更",
        "素材の色変更"
    ],
    tags: ["色"]
},


/* =========================
   DISTORT
========================= */

{
    name: "タービュレントディスプレイス",
    type: "Distort",
    description: "ノイズを使って画像をグニャグニャと歪ませる。",
    purposes: [
        "グニャグニャ",
        "ホラー",
        "水っぽい歪み",
        "炎のような変形"
    ],
    tags: ["歪み", "ノイズ", "ホラー"]
},

{
    name: "ディスプレイスメントマップ",
    type: "Distort",
    description: "別レイヤーの明暗を利用して画像を変形させる。",
    purposes: [
        "水面",
        "熱揺らぎ",
        "液体",
        "複雑な歪み"
    ],
    tags: ["歪み", "水"]
},

{
    name: "波形ワープ",
    type: "Distort",
    description: "波の形に合わせて画像を変形させる。",
    purposes: [
        "波",
        "揺れ",
        "水面",
        "アニメーション"
    ],
    tags: ["歪み"]
},

{
    name: "リップル",
    type: "Distort",
    description: "水面に波紋が広がるような変形を作る。",
    purposes: [
        "水面",
        "波紋",
        "衝撃波"
    ],
    tags: ["歪み"]
},

{
    name: "バルジ",
    type: "Distort",
    description: "画像を中心から膨らませたりへこませたりする。",
    purposes: [
        "魚眼風",
        "膨張",
        "コミカルな変形"
    ],
    tags: ["歪み"]
},

{
    name: "ツイスト",
    type: "Distort",
    description: "画像を中心からねじる。",
    purposes: [
        "渦",
        "ねじれ",
        "異常演出"
    ],
    tags: ["歪み", "ホラー"]
},

{
    name: "極座標",
    type: "Distort",
    description: "直線的な画像と円形の画像を相互変換する。",
    purposes: [
        "円形演出",
        "惑星風",
        "トンネル"
    ],
    tags: ["歪み", "3D"]
},

{
    name: "ミラー",
    type: "Distort",
    description: "画像を反転して鏡のような表現を作る。",
    purposes: [
        "左右反転",
        "万華鏡風",
        "対称構図"
    ],
    tags: ["歪み"]
},

{
    name: "オフセット",
    type: "Distort",
    description: "画像を水平・垂直方向へずらす。",
    purposes: [
        "ループ背景",
        "テクスチャ移動",
        "スクロール"
    ],
    tags: ["歪み"]
},

{
    name: "ワープ",
    type: "Distort",
    description: "画像をさまざまな形状へ変形させる。",
    purposes: [
        "変形",
        "モーフィング",
        "特殊演出"
    ],
    tags: ["歪み"]
},

{
    name: "メッシュワープ",
    type: "Distort",
    description: "格子状のポイントを動かして自由に画像を変形する。",
    purposes: [
        "顔変形",
        "形状変形",
        "モーフィング"
    ],
    tags: ["歪み"]
},

{
    name: "コーナーピン",
    type: "Distort",
    description: "4つの角を自由に動かして画像を変形する。",
    purposes: [
        "画面はめ込み",
        "看板",
        "モニター",
        "パース調整"
    ],
    tags: ["歪み", "3D"]
},


/* =========================
   GENERATE
========================= */

{
    name: "グラデーションランプ",
    type: "Generate",
    description: "2色のグラデーションを生成する。",
    purposes: [
        "背景",
        "光",
        "カラー演出",
        "グラデーション"
    ],
    tags: ["色", "光"]
},

{
    name: "4色グラデーション",
    type: "Generate",
    description: "4つの色を使ってグラデーションを生成する。",
    purposes: [
        "背景",
        "カラフルな演出",
        "抽象映像"
    ],
    tags: ["色", "光"]
},

{
    name: "フラクタル",
    type: "Generate",
    description: "フラクタルパターンを生成する。",
    purposes: [
        "抽象背景",
        "テクスチャ",
        "特殊背景"
    ],
    tags: ["ノイズ"]
},

{
    name: "グリッド",
    type: "Generate",
    description: "格子状のパターンを生成する。",
    purposes: [
        "背景",
        "サイバー演出",
        "UI風デザイン"
    ],
    tags: ["3D", "光"]
},

{
    name: "チェッカーボード",
    type: "Generate",
    description: "市松模様のパターンを生成する。",
    purposes: [
        "背景",
        "テクスチャ",
        "レトロ演出"
    ],
    tags: ["ノイズ"]
},

{
    name: "円",
    type: "Generate",
    description: "円形のグラフィックを生成する。",
    purposes: [
        "図形",
        "背景",
        "モーション素材"
    ],
    tags: ["光"]
},

{
    name: "楕円",
    type: "Generate",
    description: "楕円形のグラフィックを生成する。",
    purposes: [
        "図形",
        "背景",
        "光"
    ],
    tags: ["光"]
},

{
    name: "塗り",
    type: "Generate",
    description: "レイヤー全体または領域を指定した色で塗りつぶす。",
    purposes: [
        "色変更",
        "背景作成",
        "マット作成"
    ],
    tags: ["色"]
},

{
    name: "レンズフレア",
    type: "Generate",
    description: "カメラレンズに光が入ったようなフレアを生成する。",
    purposes: [
        "光",
        "太陽",
        "映画風",
        "SF"
    ],
    tags: ["光", "3D"]
},

{
    name: "ライトスイープ",
    type: "Generate",
    description: "光が表面を横切るようなハイライトを作る。",
    purposes: [
        "金属",
        "ロゴ",
        "文字",
        "高級感"
    ],
    tags: ["光", "文字"]
},


/* =========================
   NOISE & GRAIN
========================= */

{
    name: "フラクタルノイズ",
    type: "Noise & Grain",
    description: "複雑なノイズパターンを生成する超定番エフェクト。",
    purposes: [
        "煙",
        "雲",
        "炎",
        "テクスチャ",
        "背景"
    ],
    tags: ["ノイズ", "ホラー"]
},

{
    name: "タービュレントノイズ",
    type: "Noise & Grain",
    description: "動きのある複雑なノイズを生成する。",
    purposes: [
        "煙",
        "雲",
        "液体",
        "エネルギー"
    ],
    tags: ["ノイズ", "歪み"]
},

{
    name: "ノイズ",
    type: "Noise & Grain",
    description: "映像にランダムな粒状ノイズを加える。",
    purposes: [
        "ノイズ",
        "VHS",
        "フィルム風",
        "ホラー"
    ],
    tags: ["ノイズ", "ホラー"]
},

{
    name: "ノイズHLS",
    type: "Noise & Grain",
    description: "色相・明度などを含むノイズを追加する。",
    purposes: [
        "映像劣化",
        "レトロ",
        "VHS"
    ],
    tags: ["ノイズ", "色"]
},

{
    name: "グレイン（追加）",
    type: "Noise & Grain",
    description: "フィルム粒子のようなグレインを追加する。",
    purposes: [
        "フィルム風",
        "映画風",
        "質感追加"
    ],
    tags: ["ノイズ"]
},

{
    name: "グレイン（除去）",
    type: "Noise & Grain",
    description: "映像に含まれる粒状ノイズを低減する。",
    purposes: [
        "ノイズ除去",
        "映像補正",
        "クリーンアップ"
    ],
    tags: ["ノイズ"]
},

{
    name: "ダスト＆スクラッチ",
    type: "Noise & Grain",
    description: "映像上の小さなゴミや傷を低減する。",
    purposes: [
        "古い映像の修復",
        "フィルム修復",
        "ノイズ除去"
    ],
    tags: ["ノイズ"]
},

{
    name: "メディアン",
    type: "Noise & Grain",
    description: "ピクセルの中央値を使って細かなノイズを抑える。",
    purposes: [
        "ノイズ除去",
        "肌の補正",
        "映像修復"
    ],
    tags: ["ノイズ"]
},


/* =========================
   STYLIZE
========================= */

{
    name: "グロー",
    type: "Stylize",
    description: "明るい部分を光らせる超定番エフェクト。",
    purposes: [
        "発光",
        "ネオン",
        "文字発光",
        "光"
    ],
    tags: ["光", "文字"]
},

{
    name: "モザイク",
    type: "Stylize",
    description: "映像をブロック状のモザイクにする。",
    purposes: [
        "モザイク",
        "ピクセル演出",
        "レトロ"
    ],
    tags: ["ノイズ"]
},

{
    name: "ポスタリゼーション",
    type: "Stylize",
    description: "色数を減らしてポスターのような見た目にする。",
    purposes: [
        "アニメ風",
        "イラスト風",
        "特殊な色表現"
    ],
    tags: ["色"]
},

{
    name: "輪郭検出",
    type: "Stylize",
    description: "画像の輪郭を検出して線画のようにする。",
    purposes: [
        "線画",
        "漫画風",
        "エッジ演出"
    ],
    tags: ["色", "ホラー"]
},

{
    name: "エンボス",
    type: "Stylize",
    description: "画像に立体的な凹凸感を与える。",
    purposes: [
        "立体感",
        "金属風",
        "文字加工"
    ],
    tags: ["3D"]
},

{
    name: "カラーエンボス",
    type: "Stylize",
    description: "色を残しながらエンボスのような立体感を出す。",
    purposes: [
        "立体表現",
        "文字加工",
        "特殊加工"
    ],
    tags: ["3D", "色"]
},

{
    name: "ラフエッジ",
    type: "Stylize",
    description: "画像の輪郭を粗く崩したように加工する。",
    purposes: [
        "手描き風",
        "ホラー",
        "古い映像"
    ],
    tags: ["ホラー", "歪み"]
},

{
    name: "ストロボ",
    type: "Stylize",
    description: "映像を断続的に表示してストロボのような演出を作る。",
    purposes: [
        "フラッシュ",
        "点滅",
        "MV演出",
        "ホラー"
    ],
    tags: ["光", "ホラー"]
},


/* =========================
   SIMULATION
========================= */

{
    name: "シャター",
    type: "Simulation",
    description: "レイヤーを破砕してガラスが割れるような表現を作る。",
    purposes: [
        "破壊",
        "ガラス",
        "爆発",
        "崩壊"
    ],
    tags: ["歪み", "3D"]
},

{
    name: "CC Particle World",
    type: "Simulation",
    description: "3D空間上にパーティクルを生成する。",
    purposes: [
        "粒子",
        "火花",
        "煙",
        "エネルギー"
    ],
    tags: ["3D", "光", "ノイズ"]
},

{
    name: "CC Particle Systems II",
    type: "Simulation",
    description: "2D/3D風のパーティクルを生成する。",
    purposes: [
        "火花",
        "粒子",
        "爆発",
        "雪"
    ],
    tags: ["3D", "光", "ノイズ"]
},

{
    name: "CC Rainfall",
    type: "Simulation",
    description: "雨粒が降るようなパーティクル表現を作る。",
    purposes: [
        "雨",
        "天候",
        "背景"
    ],
    tags: ["ノイズ", "歪み"]
},

{
    name: "CC Snowfall",
    type: "Simulation",
    description: "雪が降るようなパーティクル表現を作る。",
    purposes: [
        "雪",
        "冬",
        "背景"
    ],
    tags: ["ノイズ", "歪み"]
},

{
    name: "CC Bubbles",
    type: "Simulation",
    description: "泡が浮かび上がるようなパーティクルを生成する。",
    purposes: [
        "水中",
        "泡",
        "液体"
    ],
    tags: ["歪み", "3D"]
},

{
    name: "CC Star Burst",
    type: "Simulation",
    description: "中心から光や粒子が飛び出すような演出を作る。",
    purposes: [
        "高速移動",
        "ワープ",
        "光",
        "衝撃"
    ],
    tags: ["光", "3D"]
},

{
    name: "CC Light Rays",
    type: "Simulation",
    description: "光源から放射状に伸びる光線を作る。",
    purposes: [
        "神々しい光",
        "太陽光",
        "映画風"
    ],
    tags: ["光", "3D"]
},

{
    name: "CC Light Burst 2.5",
    type: "Simulation",
    description: "中心から強い光が爆発するような演出を作る。",
    purposes: [
        "爆発",
        "フラッシュ",
        "エネルギー"
    ],
    tags: ["光", "3D"]
},

{
    name: "CC Kaleida",
    type: "Simulation",
    description: "映像を万華鏡のように複製・反転する。",
    purposes: [
        "万華鏡",
        "抽象映像",
        "ミュージックビデオ"
    ],
    tags: ["歪み", "色"]
},


/* =========================
   TIME / TRANSITION
========================= */

{
    name: "エコー",
    type: "Time",
    description: "過去のフレームを重ねて残像を作る。",
    purposes: [
        "残像",
        "スピード感",
        "ゴースト",
        "アクション"
    ],
    tags: ["歪み", "ホラー"]
},

{
    name: "ポスタリゼーション時間",
    type: "Time",
    description: "映像のフレームレートを下げたようなカクつきを作る。",
    purposes: [
        "カクカクした動き",
        "アニメ風",
        "ストップモーション",
        "グリッチ"
    ],
    tags: ["歪み", "ノイズ"]
},

{
    name: "ピクセルモーションブラー",
    type: "Time",
    description: "動きに応じたモーションブラーを生成する。",
    purposes: [
        "高速移動",
        "自然な動き",
        "モーション補間"
    ],
    tags: ["歪み"]
},

{
    name: "CC Force Motion Blur",
    type: "Time",
    description: "モーションブラーを強制的に追加する。",
    purposes: [
        "高速移動",
        "動きを滑らかにする",
        "アクション"
    ],
    tags: ["歪み"]
},

{
    name: "タイムワープ",
    type: "Time",
    description: "映像の時間的な再生速度やフレーム補間を調整する。",
    purposes: [
        "スロー",
        "高速化",
        "時間演出"
    ],
    tags: ["歪み"]
},

{
    name: "リニアワイプ",
    type: "Transition",
    description: "直線方向に映像を消したり出現させたりする。",
    purposes: [
        "トランジション",
        "出現",
        "消える",
        "場面転換"
    ],
    tags: ["文字", "光"]
},

{
    name: "ワイプ (放射状)",
    type: "Transition",
    description: "中心から円形に映像を表示・消去する。",
    purposes: [
        "場面転換",
        "円形トランジション",
        "出現"
    ],
    tags: ["光", "3D"]
},

{
    name: "グラデーションワイプ",
    type: "Transition",
    description: "グラデーションを基準に映像を切り替える。",
    purposes: [
        "トランジション",
        "おしゃれな切り替え",
        "場面転換"
    ],
    tags: ["色"]
},

{
    name: "アイリスワイプ",
    type: "Transition",
    description: "円形に絞り込むようなトランジション。",
    purposes: [
        "場面転換",
        "漫画風",
        "映画風"
    ],
    tags: ["3D"]
},

{
    name: "ブロックディゾルブ",
    type: "Transition",
    description: "ブロック状に映像が消えていくトランジション。",
    purposes: [
        "場面転換",
        "デジタル演出",
        "グリッチ風"
    ],
    tags: ["ノイズ", "歪み"]
},

{
    name: "CC Light Wipe",
    type: "Transition",
    description: "光が横切るようなトランジションを作る。",
    purposes: [
        "光の切り替え",
        "MV",
        "スタイリッシュな転換"
    ],
    tags: ["光"]
},

{
    name: "CC Grid Wipe",
    type: "Transition",
    description: "グリッド状に映像を切り替える。",
    purposes: [
        "デジタル演出",
        "ゲーム風",
        "トランジション"
    ],
    tags: ["3D", "ノイズ"]
}
,

/* =========================
   KEYING
========================= */

{
    name: "Keylight (1.2)",
    type: "Keying",
    description: "グリーンバックなどの特定色を抜くための定番キーヤー。",
    purposes: [
        "グリーンバック",
        "クロマキー",
        "背景透過",
        "人物切り抜き"
    ],
    tags: [
        "色",
        "ホラー"
    ]
},

{
    name: "Key Cleaner",
    type: "Keying",
    description: "キーイング後のエッジやマットを整える。",
    purposes: [
        "切り抜き補正",
        "エッジ修正",
        "グリーンバック"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Advanced Spill Suppressor",
    type: "Keying",
    description: "グリーンバックなどで被写体に入り込んだ色かぶりを除去する。",
    purposes: [
        "色かぶり除去",
        "クロマキー補正",
        "人物切り抜き"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Color Range",
    type: "Keying",
    description: "指定した色の範囲を選択して透明化する。",
    purposes: [
        "色抜き",
        "背景透過",
        "特定色の削除"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Extract",
    type: "Keying",
    description: "明るさや色の範囲を基準に映像を抜き出す。",
    purposes: [
        "背景透過",
        "白抜き",
        "黒抜き",
        "マット作成"
    ],
    tags: [
        "色"
    ]
},


/* =========================
   MATTE
========================= */

{
    name: "Simple Choker",
    type: "Matte",
    description: "マットの境界を縮めたり広げたりして切り抜きのエッジを調整する。",
    purposes: [
        "切り抜き調整",
        "エッジ処理",
        "クロマキー補正"
    ],
    tags: [
        "歪み"
    ]
},

{
    name: "Matte Choker",
    type: "Matte",
    description: "マットのエッジを細かく調整して切り抜きを整える。",
    purposes: [
        "切り抜き調整",
        "エッジ修正",
        "人物合成"
    ],
    tags: [
        "歪み"
    ]
},

{
    name: "Refine Soft Matte",
    type: "Matte",
    description: "髪の毛など柔らかいエッジを含むマットを調整する。",
    purposes: [
        "髪の毛",
        "人物切り抜き",
        "自然なエッジ"
    ],
    tags: [
        "歪み"
    ]
},

{
    name: "Refine Hard Matte",
    type: "Matte",
    description: "硬い輪郭を持つマットのエッジを調整する。",
    purposes: [
        "人物切り抜き",
        "輪郭補正",
        "合成"
    ],
    tags: [
        "歪み"
    ]
},


/* =========================
   PERSPECTIVE / 3D
========================= */

{
    name: "3D Camera Tracker",
    type: "Perspective",
    description: "実写映像のカメラの動きを解析して3D空間を作る。",
    purposes: [
        "実写合成",
        "カメラトラッキング",
        "3D文字配置",
        "VFX"
    ],
    tags: [
        "3D"
    ]
},

{
    name: "Optics Compensation",
    type: "Perspective",
    description: "レンズの歪みを補正したり、意図的に魚眼風に歪ませたりする。",
    purposes: [
        "魚眼",
        "レンズ補正",
        "広角風",
        "VFX"
    ],
    tags: [
        "3D",
        "歪み"
    ]
},

{
    name: "Spherize",
    type: "Perspective",
    description: "平面画像を球面に貼り付けたように変形する。",
    purposes: [
        "球体",
        "惑星",
        "球面変形"
    ],
    tags: [
        "3D",
        "歪み"
    ]
},

{
    name: "CC Sphere",
    type: "Perspective",
    description: "2D画像を球体のように見せる。",
    purposes: [
        "惑星",
        "球体",
        "3D風演出"
    ],
    tags: [
        "3D"
    ]
},

{
    name: "CC Cylinder",
    type: "Perspective",
    description: "画像を円柱状に変形する。",
    purposes: [
        "円柱",
        "立体文字",
        "3D風演出"
    ],
    tags: [
        "3D"
    ]
},

{
    name: "Drop Shadow",
    type: "Perspective",
    description: "レイヤーにドロップシャドウを追加する。",
    purposes: [
        "影",
        "文字を浮かせる",
        "立体感",
        "UI"
    ],
    tags: [
        "3D",
        "文字"
    ]
},

{
    name: "Bevel Alpha",
    type: "Perspective",
    description: "透明部分を利用してアルファ境界に立体的なベベルを付ける。",
    purposes: [
        "立体文字",
        "ロゴ",
        "ボタン",
        "金属風"
    ],
    tags: [
        "3D",
        "文字"
    ]
},


/* =========================
   CHANNEL
========================= */

{
    name: "Invert",
    type: "Channel",
    description: "映像の色を反転させる。",
    purposes: [
        "ネガ反転",
        "ホラー",
        "特殊演出"
    ],
    tags: [
        "色",
        "ホラー"
    ]
},

{
    name: "Set Matte",
    type: "Channel",
    description: "別レイヤーを使ってアルファマットを作る。",
    purposes: [
        "切り抜き",
        "マスク",
        "合成"
    ],
    tags: [
        "色",
        "歪み"
    ]
},

{
    name: "Shift Channels",
    type: "Channel",
    description: "RGBやアルファチャンネルの情報を入れ替える。",
    purposes: [
        "RGB分離",
        "グリッチ",
        "色収差風"
    ],
    tags: [
        "色",
        "ノイズ"
    ]
},

{
    name: "Minimax",
    type: "Channel",
    description: "明るさやアルファの領域を拡張・縮小する。",
    purposes: [
        "輪郭拡張",
        "マット処理",
        "文字加工"
    ],
    tags: [
        "文字",
        "歪み"
    ]
},


/* =========================
   COLOR
========================= */

{
    name: "Colorama",
    type: "Color Correction",
    description: "明るさを基準に複数の色へマッピングする。",
    purposes: [
        "色変換",
        "サイケデリック",
        "特殊カラー"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Lumetri Color",
    type: "Color Correction",
    description: "露出・色温度・コントラスト・カラーグレーディングなどをまとめて調整する。",
    purposes: [
        "カラーグレーディング",
        "映画風",
        "色補正"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Selective Color",
    type: "Color Correction",
    description: "特定の色系統だけを狙って細かく調整する。",
    purposes: [
        "特定色の調整",
        "カラーグレーディング",
        "色味変更"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Shadow/Highlight",
    type: "Color Correction",
    description: "暗部と明部を個別に調整してディテールを見せる。",
    purposes: [
        "暗部補正",
        "逆光補正",
        "映像補正"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Tint",
    type: "Color Correction",
    description: "白黒化した映像に2色の色味を付ける。",
    purposes: [
        "セピア",
        "モノクロ着色",
        "映画風"
    ],
    tags: [
        "色"
    ]
},

{
    name: "Vibrance",
    type: "Color Correction",
    description: "色の弱い部分を中心に彩度を調整する。",
    purposes: [
        "彩度アップ",
        "自然な色補正",
        "カラー調整"
    ],
    tags: [
        "色"
    ]
},


/* =========================
   STYLIZE
========================= */

{
    name: "Motion Tile",
    type: "Stylize",
    description: "映像をタイル状に複製して端まで繰り返す。",
    purposes: [
        "無限スクロール",
        "背景ループ",
        "反復テクスチャ"
    ],
    tags: [
        "歪み"
    ]
},

{
    name: "CC Vignette",
    type: "Stylize",
    description: "画面の端を暗くして視線を中央へ集める。",
    purposes: [
        "映画風",
        "ホラー",
        "集中演出"
    ],
    tags: [
        "光",
        "ホラー"
    ]
},

{
    name: "Scatter",
    type: "Stylize",
    description: "ピクセルを散らして画像を崩したような表現を作る。",
    purposes: [
        "崩壊",
        "グリッチ",
        "デジタル演出"
    ],
    tags: [
        "ノイズ",
        "歪み"
    ]
},

{
    name: "Threshold",
    type: "Stylize",
    description: "明るさをしきい値で白黒に分ける。",
    purposes: [
        "白黒加工",
        "漫画風",
        "シルエット"
    ],
    tags: [
        "色"
    ]
},


/* =========================
   SIMULATION
========================= */

{
    name: "CC Pixel Polly",
    type: "Simulation",
    description: "画像を細かなポリゴン片に分解して飛び散らせる。",
    purposes: [
        "破壊",
        "崩壊",
        "消滅",
        "爆発"
    ],
    tags: [
        "3D",
        "歪み"
    ]
},

{
    name: "CC Ball Action",
    type: "Simulation",
    description: "映像を球体の集合のように変換する。",
    purposes: [
        "ドット化",
        "球体表現",
        "デジタル演出"
    ],
    tags: [
        "3D",
        "ノイズ"
    ]
},

{
    name: "CC Drizzle",
    type: "Simulation",
    description: "細かな水滴が流れるようなシミュレーションを作る。",
    purposes: [
        "雨",
        "水滴",
        "濡れたガラス"
    ],
    tags: [
        "歪み",
        "ノイズ"
    ]
},

{
    name: "Card Dance",
    type: "Simulation",
    description: "画像をカード状の小片に分割して3D空間的に動かす。",
    purposes: [
        "3D分解",
        "粒子風",
        "デジタル演出"
    ],
    tags: [
        "3D",
        "ノイズ"
    ]
}
,

{
    name: "時間をフレームに変換",
    type: "Expression",
    description: "現在の時間をフレーム数に変換する。",
    purposes: [
        "フレーム計算",
        "タイミング制御",
        "Expression"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `timeToFrames();`
},

{
    name: "フレームを時間に変換",
    type: "Expression",
    description: "フレーム数を時間へ変換する。",
    purposes: [
        "フレーム計算",
        "タイミング制御"
    ],
    tags: [
        "3D"
    ],
    code: `framesToTime(30);`
},

{
    name: "値を滑らかにする",
    type: "Expression",
    description: "プロパティの急激な変化を滑らかにする。",
    purposes: [
        "揺れを滑らかにする",
        "ノイズ除去",
        "自然な動き"
    ],
    tags: [
        "歪み"
    ],
    code: `smooth(0.2, 5);`
},

{
    name: "キーフレームループ",
    type: "Expression",
    description: "キーフレームのアニメーションを繰り返す。",
    purposes: [
        "無限ループ",
        "繰り返しアニメーション"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `loopOut("cycle");`
},

{
    name: "逆再生ループ",
    type: "Expression",
    description: "キーフレームを往復させる。",
    purposes: [
        "往復運動",
        "振り子",
        "繰り返し"
    ],
    tags: [
        "歪み"
    ],
    code: `loopOut("pingpong");`
},

{
    name: "少し前の値",
    type: "Expression",
    description: "少し前の時間のプロパティ値を取得する。",
    purposes: [
        "遅延",
        "残像",
        "トレイル"
    ],
    tags: [
        "光",
        "歪み"
    ],
    code: `valueAtTime(time - 0.1);`
},

{
    name: "現在の値",
    type: "Expression",
    description: "現在のプロパティ値を取得する。",
    purposes: [
        "Expressionの基本",
        "値の参照"
    ],
    tags: [
        "文字"
    ],
    code: `value;`
},

{
    name: "フレームレートを下げる",
    type: "Expression",
    description: "Expressionの更新頻度を下げてカクついた動きを作る。",
    purposes: [
        "カクカク",
        "グリッチ",
        "アニメ風"
    ],
    tags: [
        "ノイズ",
        "ホラー"
    ],
    code: `posterizeTime(8);
value;`
},

{
    name: "ランダム値を固定",
    type: "Expression",
    description: "ランダム値を毎回変わらないように固定する。",
    purposes: [
        "ランダム配置",
        "ノイズ",
        "再現可能なランダム"
    ],
    tags: [
        "ノイズ"
    ],
    code: `seedRandom(1, true);
random(0, 100);`
},

{
    name: "滑らかな揺れ",
    type: "Expression",
    description: "Wiggleした値を滑らかにして自然な動きを作る。",
    purposes: [
        "自然な揺れ",
        "手ブレ",
        "浮遊"
    ],
    tags: [
        "歪み"
    ],
    code: `smooth(0.2, 5);`
}
,

/* =========================
   EXPRESSION CONTROLS
========================= */

{
    name: "3D Point Control（3D ポイント制御）",
    type: "Expression Controls",
    description: "3D空間上のX・Y・Z座標をコントロールする。",
    purposes: [
        "3D位置制御",
        "3Dエフェクト制御",
        "複数レイヤーの3D制御"
    ],
    tags: [
        "3D"
    ],
    code: `thisComp.layer("CONTROL").effect("3D Point Control")("3D Point")`
},

{
    name: "Angle Control（角度制御）",
    type: "Expression Controls",
    description: "角度の数値をExpressionからコントロールする。",
    purposes: [
        "回転",
        "方向制御",
        "複数レイヤーの回転制御"
    ],
    tags: [
        "3D"
    ],
    code: `thisComp.layer("CONTROL").effect("Angle Control")("Angle")`
},

{
    name: "Checkbox Control（チェックボックス制御）",
    type: "Expression Controls",
    description: "ON/OFFをExpressionから制御する。",
    purposes: [
        "表示切り替え",
        "アニメーションON/OFF",
        "演出の切り替え"
    ],
    tags: [
        "文字"
    ],
    code: `thisComp.layer("CONTROL").effect("Checkbox Control")("Checkbox")`
},

{
    name: "Color Control（カラー制御）",
    type: "Expression Controls",
    description: "色をExpressionからコントロールする。",
    purposes: [
        "文字色変更",
        "グロー色変更",
        "シェイプ色変更",
        "複数レイヤーの色統一"
    ],
    tags: [
        "色",
        "光",
        "文字"
    ],
    code: `thisComp.layer("CONTROL").effect("Color Control")("Color")`
},

{
    name: "Dropdown Menu Control（ドロップダウンメニュー制御）",
    type: "Expression Controls",
    description: "複数の選択肢から1つを選んでExpressionの動作を切り替える。",
    purposes: [
        "演出切り替え",
        "アニメーション切り替え",
        "複数パターンの管理"
    ],
    tags: [
        "文字",
        "3D"
    ],
    code: `thisComp.layer("CONTROL").effect("Dropdown Menu Control")("Menu")`
},

{
    name: "Layer Control（レイヤー制御）",
    type: "Expression Controls",
    description: "別のレイヤーをExpressionから指定して参照する。",
    purposes: [
        "別レイヤー参照",
        "コントローラーレイヤー",
        "複数レイヤー制御"
    ],
    tags: [
        "3D"
    ],
    code: `thisComp.layer("CONTROL").effect("Layer Control")("Layer")`
},

{
    name: "Point Control（ポイント制御）",
    type: "Expression Controls",
    description: "2DのX・Y座標をExpressionからコントロールする。",
    purposes: [
        "位置制御",
        "アンカーポイント制御",
        "エフェクト位置制御"
    ],
    tags: [
        "3D",
        "光"
    ],
    code: `thisComp.layer("CONTROL").effect("Point Control")("Point")`
},

{
    name: "Slider Control（スライダー制御）",
    type: "Expression Controls",
    description: "1つの数値をスライダーでコントロールする。",
    purposes: [
        "数値制御",
        "速度調整",
        "強度調整",
        "複数プロパティの制御"
    ],
    tags: [
        "文字",
        "光",
        "3D"
    ],
    code: `thisComp.layer("CONTROL").effect("Slider Control")("Slider")`
}
,

/* =========================
   AUDIO
========================= */

{
    name: "Backwards",
    type: "Audio",
    description: "オーディオを逆再生する。",
    purposes: [
        "逆再生",
        "不気味な演出",
        "特殊効果"
    ],
    tags: [
        "音",
        "ホラー"
    ]
},

{
    name: "Bass & Treble",
    type: "Audio",
    description: "低音と高音をブースト・カットして音のバランスを調整する。",
    purposes: [
        "低音を強くする",
        "高音を強くする",
        "音質調整"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Delay",
    type: "Audio",
    description: "音を遅延させてエコーのような効果を作る。",
    purposes: [
        "エコー",
        "やまびこ",
        "空間的な音"
    ],
    tags: [
        "音",
        "ホラー"
    ]
},

{
    name: "Flange & Chorus",
    type: "Audio",
    description: "音を複製・遅延させて厚みや揺らぎを加える。",
    purposes: [
        "音に厚みを出す",
        "コーラス",
        "揺らぎ",
        "特殊効果"
    ],
    tags: [
        "音"
    ]
},

{
    name: "High-Low Pass",
    type: "Audio",
    description: "特定の周波数より高い音または低い音を通す・カットする。",
    purposes: [
        "こもった音",
        "ラジオ風",
        "低音カット",
        "高音カット"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Modulator",
    type: "Audio",
    description: "音に変調を加えて独特な音色を作る。",
    purposes: [
        "特殊音",
        "ロボット風",
        "SF風"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Parametric EQ",
    type: "Audio",
    description: "特定の周波数帯を細かく調整するイコライザー。",
    purposes: [
        "音質調整",
        "特定の音域を強調",
        "不要な音域をカット"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Reverb",
    type: "Audio",
    description: "音の反響を加えて空間の広がりを作る。",
    purposes: [
        "広い空間",
        "洞窟風",
        "ホール風",
        "残響"
    ],
    tags: [
        "音",
        "ホラー"
    ]
},

{
    name: "Stereo Mixer",
    type: "Audio",
    description: "左右のステレオチャンネルのバランスを調整する。",
    purposes: [
        "左右バランス",
        "ステレオ調整",
        "音の定位"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Tone",
    type: "Audio",
    description: "単純な波形の音を生成する。",
    purposes: [
        "電子音",
        "ビープ音",
        "サイン波",
        "効果音の素材"
    ],
    tags: [
        "音"
    ]
},

{
    name: "Compressor",
    type: "Audio",
    description: "大きな音と小さな音の差を抑えて音量を整える。",
    purposes: [
        "音量を均一にする",
        "ナレーション",
        "音圧調整",
        "ミックス"
    ],
    tags: [
        "音"
    ]
},


/* =========================
   AUDIO VISUALIZATION
========================= */

{
    name: "Audio Spectrum",
    type: "Generate",
    description: "音声の周波数をバーや線などで視覚化する。",
    purposes: [
        "音ハメ",
        "音楽ビジュアライザー",
        "MV",
        "配信画面"
    ],
    tags: [
        "音",
        "光"
    ]
},

{
    name: "Audio Waveform",
    type: "Generate",
    description: "音声の波形を画面上に表示する。",
    purposes: [
        "音ハメ",
        "波形表示",
        "MV",
        "音声ビジュアライザー"
    ],
    tags: [
        "音",
        "光"
    ]
}
];   