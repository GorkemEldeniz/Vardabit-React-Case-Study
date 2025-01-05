# Vardabit React Case Study

## Genel Bakış

Bu proje, React, TypeScript ve Vite kullanılarak geliştirilmiş bir frontend uygulamasıdır. Vardabit için bir frontend geliştirici pozisyonu için bir test çalışması olarak tasarlanmıştır. Uygulama, kullanıcıların ürünleri görüntülemesine, filtrelemesine ve detaylarını incelemesine olanak tanır.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Bileşen tabanlı mimarisi sayesinde uygulamanın yeniden kullanılabilir parçalar halinde geliştirilmesine olanak tanır.
- **TypeScript**: JavaScript'in bir üst kümesi olan TypeScript, statik tip kontrolü sağlar. Bu, daha güvenilir ve hatasız bir kod yazımına yardımcı olur.
- **Vite**: Modern bir frontend geliştirme aracı olan Vite, hızlı bir geliştirme deneyimi sunar. Hızlı yeniden yükleme ve modül bazlı yapılandırma ile geliştiricilerin verimliliğini artırır.
- **Redux Toolkit**: Uygulama durumunu yönetmek için kullanılan bir kütüphanedir. Uygulamanın durumunu merkezi bir yerde tutarak, bileşenler arasında veri akışını kolaylaştırır.
- **React Router**: Uygulama içinde sayfalar arasında geçiş yapmayı sağlayan bir kütüphanedir. Kullanıcıların URL'leri kullanarak farklı bileşenlere erişimini sağlar.
- **Axios**: HTTP istekleri yapmak için kullanılan bir kütüphanedir. API ile etkileşimde bulunarak veri alımını ve gönderimini kolaylaştırır.
- **Tailwind CSS**: Kullanıcı arayüzü tasarımı için kullanılan bir CSS framework'üdür. Hızlı ve özelleştirilebilir stil uygulamaları yapmayı sağlar.

## Uygulamanın Genel Mantığı

Uygulama, kullanıcıların ürünleri görüntülemesine ve filtrelemesine olanak tanır. Ana bileşenler arasında ürün listesi, ürün detayları ve filtreleme bileşenleri bulunmaktadır. Kullanıcılar, ürünleri markalarına veya modellere göre filtreleyebilir ve her bir ürünün detaylarını inceleyebilir.

### Temel Özellikler

- **Ürün Listesi**: Kullanıcılar, mevcut ürünleri listeleyebilir ve her bir ürünün temel bilgilerini görebilir.
- **Ürün Detayı**: Kullanıcılar, bir ürüne tıkladıklarında o ürünün detay sayfasına yönlendirilir.
- **Filtreleme**: Kullanıcılar, ürünleri markalarına veya modellere göre filtreleyebilir.
- **Sepet Yönetimi**: Kullanıcılar, ürünleri sepete ekleyebilir, çıkarabilir ve miktarını artırıp azaltabilir.

## Gereksinimler

- Node.js (14 veya daha yüksek sürüm)
- npm veya yarn

## Kurulum

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/yourusername/vardabit-react-case-study.git
   cd vardabit-react-case-study
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   # veya
   yarn install
   ```

3. Ortam değişkenlerini ayarlayın:
   Kök dizinde bir `.env` dosyası oluşturun ve aşağıdakileri ekleyin:
   ```env
   VITE_API_URL=https://5fc9346b2af77700165ae514.mockapi.io/products
   ```

## Uygulamayı Çalıştırma

Geliştirme sunucusunu başlatmak için:

```bash
npm run dev
# veya
yarn dev
```

Varsayılan olarak uygulama `http://localhost:5173` adresinde çalışır. Ancak, uygulamayı istediğiniz bir portta çalıştırmak için `package.json` dosyasındaki `dev` script'ini aşağıdaki gibi güncelleyebilirsiniz:

```json
"dev": "vite --port ${YOUR_PORT}"
```

Bu şekilde, uygulamayı `http://localhost:YOUR_PORT` adresinde başlatabilirsiniz.

## Üretim için Derleme

Uygulamayı üretim için derlemek için:

```bash
npm run build
# veya
yarn build
```

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

Herhangi bir sorunuz varsa, lütfen iletişime geçin:

- **İsim**: Adınız
- **E-posta**: your.email@example.com
