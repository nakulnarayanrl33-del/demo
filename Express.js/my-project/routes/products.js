router.post('/create_product', (req, res) => {
    const { name, description, price } = req.body;
    const product = new Product({
        name,
        description,
        price
    });
    const validationError = product.validateSync();
    if (validationError) {
        res.render('./product/create', { error: validationError.errors});
    } else {
        product.save().then(() => {
                res.redirect('/');
            }).catch((error) => {
                console.error(error);
                
            });
   }
})