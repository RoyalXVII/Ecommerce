<template>
    <div class="container my-5 py-5 z-depth-1">
        <section class="text-center">
            <h3 class="font-weight-bold mb-5">Product Information</h3>
            <div class="row">
                <div class="col-lg-6">
                    <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
                        <div class="carousel-inner text-center text-md-left" role="listbox">
                            <div class="carousel-item active">
                            <img :src="product.image" alt="" class="img-fluid">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-5 text-center">
                    <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold text-black mb-1 ml-xl-0 ml-4">
                        <strong>{{ product.name }}</strong>
                    </h2>
                    <h3 class="h3-responsive text-center mb-5 ml-xl-0 ml-4">
                        <span class="text-warning font-weight-bold">
                            <strong>{{ product.price }} $</strong>
                        </span>
                    </h3>
                    <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne1">
                                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    <h5 class="mb-0">
                                        Description
                                        <i class="fas fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>
                            <div id="collapseOne1" class="collapse show text-black" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                                <div class="card-body">
                                    {{ product.short }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="color">
                        <div class="mt-5">
                            <p class="grey-text">Choose your color</p>
                            <div class="row text-center">
                            <div class="col-md-4 col-12">
                                <div class="form-group">
                                    <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked">
                                    <label for="radio100" class="form-check-label">Black</label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <input class="form-check-input" name="group100" type="radio" id="radio101">
                                    <label for="radio101" class="form-check-label">White</label>
                                </div>
                            </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input class="form-check-input" name="group100" type="radio" id="radio101">
                                        <label for="radio101" class="form-check-label">Red</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12 text-center">
                                    <button class="btn my-btn-color btn-rounded bg-success text-white" v-on:click="addProductToCart({product, quantity})">
                                    <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Product',
    props: ['id'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        ...mapActions(['getProductById', 'addProductToCart', 'getProducts'])
    },
    created() { 
        this.getProductById(this.id)
    },
    computed: {
        ...mapGetters(['product']) 
    }
}
</script>

<style scoped>

</style>
