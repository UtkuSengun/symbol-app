<template>
    <div>
        <modal :values="values" @onAddModal="handleAddModal"></modal> 
        <ul>
            <li v-for="item in selectedItems" :key="item">
            {{item}}
            </li>
        </ul>
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
            selectedItems: []          
        }
    },
    created() {

    this.$http.get("ticker/24hr").then(response => {
            this.values=response.data
        })
    },
    methods: {
        handleAddModal(value) {
            this.selectedItems.push(value)
        }
    }
    }
</script>