<template>
    <div>
        <modal :values="values" @onAddModal="handleAddModal"></modal> 

        <div class="row mt-5 rounded">

            <div class="col-12 ml-5" v-for="(item , i ) in selectedItems" :key="i">
                <div class="row border border-2 border border-dark rounded">
                    <div class="col-2"></div>

                    <div class="col-8 my-3 mx-3 p-3 border border-2 rounded">
                        {{item.name + item.price}}
                        <button class="btn btn-success">Add</button>
                    </div>

                    <div class="col-2"></div>
                </div>
            </div>

        </div>
<!-- 
        <ul>
            <li v-for="item in selectedItems" :key="item">
            {{item}}
            </li>
        </ul> -->
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