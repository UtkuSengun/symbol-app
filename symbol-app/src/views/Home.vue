<template>
    <div class="conitaner">
        <div class="row">
            <div class="col-6"></div>
            <div class="col-6">
                <div class="row">
                    <div class="col-12">
                        
                    </div>
                    <div class="col-12">
                        <Modal :values = values></Modal>
                    </div>
                        
                    </div> 
            </div>
        </div>
        
        
        
        
    </div>
</template>

<script>
import SymbolList from '../components/SymbolList.vue';
import Modal from '../components/Modal.vue'

export default {
    name: 'Home',
    components: {
        ButtonClick,
        SymbolList,
        Modal
    },
    data() {
        return {
            values: []
        }
    },
    created() {
        fetch('https://api2.binance.com/api/v3/ticker/24hr')
        .then((res) => {return res.json () })
        .then((values) => {this.values = values })
    }
};
</script>