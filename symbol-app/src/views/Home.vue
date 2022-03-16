<template>
    <div>
                        <Modal :values = values></Modal>
    </div>
</template>

<script>
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
        fetch('https://api2.binance.com/api/v3/ticker/24hr')
        .then((res) => {return res.json () })
        .then((values) => {this.values = values })
    }
};
</script>