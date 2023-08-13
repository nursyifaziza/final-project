const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Video = require('../models/Video');
const Product = require('../models/Product');
const Comment = require('../models/Comment');


const seedDatabase = async() => {
    try {
        connectDB();
        
        // Clear existing data
        await Video.deleteMany();
        await Product.deleteMany();
        await Comment.deleteMany();

        // Create sample data
        const videos = await Video.create([
            {
                title: 'THENBLANK New Collection: 공백 The Pals',
                url: 'https://www.youtube.com/watch?v=RwfGTZeno8E',
                thumbnail: 'https://img.youtube.com/vi/RwfGTZeno8E/maxresdefault.jpg'
            }, {
                title: 'Jeans Series - Noona Skirt by Rokgaliya',
                url: 'https://www.youtube.com/watch?v=VGjHvOxglPE',
                thumbnail: 'https://img.youtube.com/vi/VGjHvOxglPE/maxresdefault.jpg'
            }, {
                title: 'REVIEW PARFUM KITSCHY! wangi mahal + tahan lama tapi affordable?!',
                url: 'https://www.youtube.com/watch?v=8o7O6pMV7jc',
                thumbnail: 'https://img.youtube.com/vi/8o7O6pMV7jc/maxresdefault.jpg'
            }, {
                title: 'Jelasin wangi parfum SAFF & Co pakai bahasa sehari-hari.',
                url: 'https://www.youtube.com/watch?v=S2SX9KzT1Is',
                thumbnail: 'https://img.youtube.com/vi/S2SX9KzT1Is/maxresdefault.jpg'
            }, {
                title: 'Cobain Somethinc Calm Down (acne prone & oily combination skin)',
                url: 'https://www.youtube.com/watch?v=Ix06Jo56Dfg',
                thumbnail: 'https://img.youtube.com/vi/Ix06Jo56Dfg/maxresdefault.jpg'
            }
        ]);

        const products = await Product.create([
            {
                title: 'THENBLANK | Cabana Shirt | Maroon',
                link: 'https://www.tokopedia.com/thenblank/thenblank-cabana-shirt-maroon',
                price: 199000,
                videoId: videos[0].id
            }, {
                title: 'THENBLANK | Everyday Shirt | Sage',
                link: 'https://www.tokopedia.com/thenblank/thenblank-everyday-shirt-sage',
                price: 169000,
                videoId: videos[0].id
            }, {
                title: 'THENBLANK | Dotted Sweater | Denim',
                link: 'https://www.tokopedia.com/thenblank/thenblank-dotted-sweater-denim',
                price: 299000,
                videoId: videos[0].id
            }, {
                title: 'Runa Skirt SONIA R1507 - Rok Denim panjang wanita Highwaist premium',
                link: 'https://www.tokopedia.com/soniainc/runa-skirt-sonia-r1507-rok-denim-panjang-wani' +
                        'ta-highwaist-premium',
                price: 295000,
                videoId: videos[1].id
            }, {
                title: 'Skirt Midi Cargo Plain JeansWanita - Rok Midi Kantong Samping Unfinish - Kantong' +
                        ' Samping, All Size',
                link: 'https://www.tokopedia.com/ancienstore/skirt-midi-cargo-plain-jeanswanita-rok-mid' +
                        'i-kantong-samping-unfinish-kantong-samping-all-size',
                price: 120000,
                videoId: videos[1].id
            }, {
                title: 'Kitschy Day Dream Extrait De Parfum',
                link: 'https://www.tokopedia.com/kitschybeauty/kitschy-day-dream-extrait-de-parfum',
                price: 298000,
                videoId: videos[2].id
            }, {
                title: 'Kitschy Feels - Forever Vacation',
                link: 'https://www.tokopedia.com/kitschybeauty/kitschy-feels-forever-vacation-2b60',
                price: 298000,
                videoId: videos[2].id
            }, {
                title: 'SAFF & Co. Extrait de Parfum - XOCOLATL',
                link: 'https://www.tokopedia.com/saffnco/saff-co-extrait-de-parfum-xocolatl',
                price: 217700,
                videoId: videos[3].id
            }, {
                title: 'SAFF & Co. Extrait de Parfum - OSTARA',
                link: 'https://www.tokopedia.com/saffnco/saff-co-extrait-de-parfum-ostara',
                price: 212200,
                videoId: videos[3].id
            }, {
                title: 'SOMETHINC [2 PCS] Paket Calm Down Series Skinpair Bubble Cleanser',
                link: 'https://www.tokopedia.com/somethinc/somethinc-2-pcs-paket-calm-down-series-skinp' +
                'air-bubble-cleanser',
                price: 218000,
                videoId: videos[4].id
            }, {
                title: 'SOMETHINC Calm Down! Skinpair R-Cover Cream',
                link: 'https://www.tokopedia.com/somethinc/somethinc-calm-down-skinpair-r-cover-cream',
                price: 96750,
                videoId: videos[4].id
            }
        ]);

        const comments = await Comment.create([
            {
                videoId: videos[0].id,
                text: 'Kasih diskon dong kak',
                username: 'nursyifaziza'
            }, {
                videoId: videos[0].id,
                text: 'Yang warna Navy habis nggak ada kak?',
                username: 'nursyifaziza'
            }
        ]);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
};

seedDatabase();