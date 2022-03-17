<template>
    <div>
            <Modal :values = values></Modal>
    </div>
</template>

<script>
import axios from 'axios';
import SymbolList from '../components/SymbolList.vue';
import Modal from '../components/Modal.vue'

export default {
    name: 'Home',
    components: {
        SymbolList,
        Modal
    },
    data() {
        return {
            values: []
        }
    },
    created() {
           
           this.$http.get("ticker/24hr")


        // axios.get('https://api2.binance.com/api/v3/ticker/24hr')
        // .then(response => {
        //     this.values=response.data
        // })
}
}
</script>