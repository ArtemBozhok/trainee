import renderEntireDom from "../../render";

let state = {
    products: [
        {
            id: 1,
            img: 'https://media.npr.org/assets/news/2010/05/27/hotdog-b48b740d9d292d8f3243529d834cd89af866ab47-s300-c85.jpg',
            name: 'New York',
            price: 1,
            description: '<p>Lorem ipsum dolor sit amet, conse.</p><p>Lorem ipsum dolor sit amet, conse.</p>',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/photos/classic-hot-dog-with-big-sausage-picture-id691799146?k=6&m=691799146&s=170667a&w=0&h=K1BCl6meW42L3dm_Avt9w3loPXhw61PKxXJgh5EeYtQ=',
            name: 'Hot Dog',
            price: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam, debitis eum fugiat harum in libero officia velit. Cum et fuga fugit incidunt ipsam laborum quas quo tempore, vero.',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
        {
            id: 3,
            img: 'https://mooyah-cdn.preproduction.io/globals/Build-Your-Own-Hot-Dog.png?mtime=20190416114628&focal=none',
            name: 'Hot dog 3',
            price: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam, debitis eum fugiat harum in libero officia velit. Cum et fuga fugit incidunt ipsam laborum quas quo tempore, vero.',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
        {
            id: 4,
            img: 'https://www.marions-kochbuch.de/dru-pic/3902.jpg',
            name: 'New York 2',
            price: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam, debitis eum fugiat harum in libero officia velit. Cum et fuga fugit incidunt ipsam laborum quas quo tempore, vero.',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
        {
            id: 5,
            img: 'https://gastrosev.ru/wp-content/uploads/2019/08/61948159_116551109645812_2646914740874882437_n-1024x681.jpg',
            name: 'New York 4',
            price: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam, debitis eum fugiat harum in libero officia velit. Cum et fuga fugit incidunt ipsam laborum quas quo tempore, vero.',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
        {
            id: 6,
            img: 'https://www.trivia-times.com/wp-content/uploads/2018/07/11.jpg',
            name: 'Las Vegas',
            price: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam, debitis eum fugiat harum in libero officia velit. Cum et fuga fugit incidunt ipsam laborum quas quo tempore, vero.',
            isEditable: false,
            isValid: true,
            validationMessage: ''
        },
    ],
    newProductInfo: {
        id: '',
        img: '',
        name: '',
        price: '',
        description: '',
        isEditable: false,
        isValid: true,
        validationMessage: ''

    },
    isModalShowed: false,
    takeEditingProduct: (id) => {
        return state.products.find(product => product.id === id);
    },
    editProduct: (id) => {
        let product = state.takeEditingProduct(id);
        if (!product.isEditable || (product.isEditable && state.validateName(product.name)) === 1) {
            product.isEditable = !product.isEditable;
        } else {
            product.isValid = false;
            product.validationMessage = `Hot-Dog with name: "${product.name.trim()}" already exist. Please chose another name.`;
        }
        renderEntireDom();
    },
    updateInfo: (key, value, id) => {
        let product = state.takeEditingProduct(id);
        product[key] = value;
        product.isValid = true;
        renderEntireDom();
    },
    deleteProduct: (id) => {
        let product = state.takeEditingProduct(id);
        let index = state.products.indexOf(product);
        state.products.splice(index, 1);
        renderEntireDom();
    },
    toggleModal: () => {
        state.isModalShowed = !state.isModalShowed;
        state.newProductInfo.isValid = true;
        state.newProductInfo.validationMessage = '';
        renderEntireDom();
    },
    addNewProduct: (key, value) => {
        state.newProductInfo[key] = value;
        state.newProductInfo.isValid = true;
        state.newProductInfo.validationMessage = '';
        renderEntireDom();
    },
    pushNewProduct: () => {
        let newProduct = {};
        Object.assign(newProduct, state.newProductInfo);
        newProduct.id = state.products.length + 1;

        if (!state.validateName(newProduct.name)) {
            state.products.push(newProduct);
            state.isModalShowed = !state.isModalShowed;
            for (let key in state.newProductInfo) {
                if (typeof key !== 'boolean') {
                    state.newProductInfo[key] = '';
                }
            }
            state.newProductInfo.isValid = true;
            state.newProductInfo.validationMessage = '';
        } else {
            state.newProductInfo.isValid = false;
            state.newProductInfo.validationMessage = `Hot-Dog with name: "${newProduct.name.trim()}" already exist. Please chose another name.`;
        }
        renderEntireDom();

    },
    validateName: (name) => {
        let coincidence = state.products.filter(product => product.name.toLocaleLowerCase().trim() === name.toLocaleLowerCase().trim());
        return coincidence.length || undefined;
    }
}


export default state;