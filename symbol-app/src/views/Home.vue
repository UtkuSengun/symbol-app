<template>
    <div>
            <modal :values = values></modal>
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
            values: [],           
        }
    },
    created() {

    this.$http.get("ticker/24hr").then(response => {
            this.values=response.data
        })

}
}
</script>