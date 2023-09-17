# React Native - Webrazzi News

Webrazzi'nin çeşitli kategorilerdeki haberlerini kullanıcılara sunan mobil bir haber okuma uygulaması. 👍

## Özellikler

- İki katman ile tasarlanan "adaptive icon" özelliği.
- Uygulama açılış ekranı "splash screen" özelleştirmesi.
- "Öne çıkanlar" başlığı altında son yayınlanan 5 içeriğe kaydırmalı görünüm ile ulaşabilirsiniz.
- "Daha Fazla Haber Göster" butonu ile geçmişe yönelik tüm içeriklere ulaşabilirsiniz.
- "Pull-to-refresh" özelliği ile güncel içeriklere ulaşabilirsiniz.
- Arama yaparak ilgili içereğe daha hızlı ulaşabilirsiniz.
- İstediğiniz içerikleri koleksiyona ekleyebilirsiniz.
- Dileğiniz içerik başlığını ve bağlantısını paylaşabilirsiniz.

## Uygulama Dosyaları

Uygulamanın son halini **APK** olarak [buradan](https://github.com/ugurdalkiran/react-native-webrazzi-news/raw/main/webrazzi.apk) indirebilirsiniz.

Uygulamanın tüm kaynak kodlarını ise **WeTransfer** üzerinden [buraya](https://we.tl/t-yZf6a2Ty9P) tıklayarak indirebilirsiniz.

## Kullanılan Paketler

- @react-navigation (Navigasyonu yönetmek için.)
- react-native-mmkv (Koleksiyona eklenen içerikleri cihazın hafızasında tutabilmek için.)
- react-native-reanimated (Dokunma animasyonları için.)
- react-native-splash-screen (Açılış ekranını özelleştirebilmek için.)
- react-native-webview (Haber içeriğine eklenen videoyu gösterebilmek için.)
- react-native-svg (Tüm SVG dosyalarını yönetmek için.)
- xmldom (HTML olarak gönderilen haber detayını JSON formatına dönüştürmek için.)
- dayjs (Haberin yayınlanma tarihini göstermek için.)

## Uygulama Tanıtım Videosu

https://github.com/ugurdalkiran/react-native-webrazzi-news/assets/27302986/68b02be1-b0b9-4408-b3ac-a697dfd93153

## Uygulama Görselleri (1/2)

![PNG](https://raw.githubusercontent.com/ugurdalkiran/react-native-webrazzi-news/main/promotion1.png)

## Uygulama Görselleri (2/2)

![PNG](https://raw.githubusercontent.com/ugurdalkiran/react-native-webrazzi-news/main/promotion2.png)

## Ek Bilgi

- Yüklediğim kütüphanelerin mevcut proje ile olan uyumsuzlukları nedeniyle **"node_modules"** klasörü altında ilgili kütüphanenin kaynak kodlarında değişiklikler yaptım. Bu değişiklikler genelde **"android/build.gradle"** dosyası içinde kullanılan **"kotlin"** versiyonunu uyumlu bir sürümle değişirmek oldu.

- Koleksiyona eklenen içeriklerin yönetimi kısmında **"React Context API"** kullandım.

- Uygulamanın genel çerçevesinde kullandığım **"pages"**, **"components"** ve **"support"** yolları için **"tsconfig.json"** ve **"babel.config.js"** dosyalarında **"module-resolver"** işlemi yaptım.

- Uygulamanın genel yapısında kullanılan tüm renkleri **"support"** dizini altında bulunan **"Themes.tsx"** dosyası ile yönettim.

- Yardımcı tüm fonksiyon ve tanımlamaları **"support"** dizini altında bulunan **"Utils.tsx"** dosyası ile yönettim.

- API ile aldığım haber detayının HTML formatında olmasından dolayı doğrudan React Native bileşenleri ile ekranda göstermem kolay olmadı. Bunun için gelen HTML formatındaki veriyi **"xmldom"** kütüphanesi ile JSON formatına dönüştürdüm. Daha sonra ilgili koşulları yazarak React Native tarafında karşılığı olan **"Text"**, **"Image"** ve **"WebView"** gibi bileşenlere dönüştürerek ekranda haber detayını gösterdim.
