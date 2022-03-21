<template>
<div class="container my-5">
    <div class="row">
        <div class="col-2"></div>
    <div class="col-8  border border-2 ">
        <div class="row" >
            <div class="col-9 text-center font-weight-bold py-3">
                {{value.symbol}} - {{value.lastPrice}}
            </div>
            <div class="col-2 p-2">
                <button @click="addSymbol(value.symbol)" class="btn btn-success">Add</button>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SymbolList',
    props: {
        value: { type: Object },
    },
    data() {
        return {
            addedSymbols: []
        }
    },
    methods: {
        addSymbol(symbolName) {
            
            if(!this.addedSymbols.includes(symbolName)) {
                this.addedSymbols.push(symbolName)
               // console.log("seçilen symbol" +  symbolName) //sembolun seçildiğini,birden fazla seçilemediğini anlıyoruz.
            }
            this.$emit('onAdd', symbolName)
        }
    }
    
    }

</script>
