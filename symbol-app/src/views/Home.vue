<template>
    <div>
        <modal :values="values" @onAddModal="handleAddModal"></modal> 

        <div class="row mt-5 rounded border border-2 border border-dark">

            <div class="row my-3">
                    <div class="col-1"></div>
                    <div class="col-2">
                        <input class="form-control" placeholder="Search Symbols">
                    </div>
                    <div class="col-8"></div>
            </div>
            
            <div class="col-12" v-for="(item , i ) in selectedItems" :key="i">
                <div class="row p-2 m-2 border border-2 rounded">
                    <div class="col-10 text-start">
                        {{item.name +" --- "+ item.price}}
                    </div>
                    <div class="col-2 text-end">
                        <button class="btn btn-danger text-center">Remove</button>
                    </div>
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
            selectedItems: [],
                
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