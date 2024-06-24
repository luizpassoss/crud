import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/nome-do-seu-banco-de-dados';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
});

export { mongoose };

