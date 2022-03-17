<template>
<div class="container">
        <div class="col-12">
            <div class="row">
                <div class="col-6"></div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6 text-end rounded">
                            <b-button variant="outline-dark p-3 px-5">Refresh</b-button>
                        </div>
                        <div class="col-6">
                                <b-button variant="outline-dark p-3 px-5" @click="modalShow = !modalShow">Add Symbol</b-button>
                                    <b-modal v-model="modalShow">
                                    <template v-for="(value, index) in values">
                                                    <SymbolList :value=value :key=index></SymbolList>
                                    </template>
                                </b-modal>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 border border-1 border border-dark">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import SymbolList from '../components/SymbolList.vue'
export default {
components: { SymbolList },
    name: 'Modal',
    props: {
            values: {type: Array}
    },
    
    data() {
    return {
        modalShow: false
    }
    }
}
</script>