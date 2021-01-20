const express = require('express');
const app = express();

const PORT = process.env.PORT || 8877;



app.get('/about', (req, res) => {
    res.json({
        name: 'Emanuel',
        email: 'emanuelpaivamedeiros@gmail.com',
        socials: [
            {
                type: 'github',
                url: 'https://github.com/Nel-Medeiros'
            },
            {
                type: 'youtube',
                url: 'https://www.youtube.com/channel/UC8OwoLCnATrc4Neg_M_X3KA'
            },
            {
                type: 'instagram',
                url: 'https://www.instagram.com/emanuel_medeiros_wd/'
            },
            {
                type: 'twitter',
                url: 'https://twitter.com/EmanuelPaivaMe2'
            }
        ],
        prefession: 'Software Developer',
        company: 'GFT'
    })
})

app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
});