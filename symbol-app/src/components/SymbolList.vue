<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 border border-2">
        <div class="row">
          <div class="col-9 text-center font-weight-bold py-3">
            {{ value.symbol }} - {{ value.lastPrice }}
          </div>
          <div class="col-2 p-2">
            <button @click="addSymbol(value.symbol, value.lastPrice)" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SymbolList",
  props: {
    value: { type: Object },
  },
  data() {
    return {
      addedSymbols: []
    }
  },
  methods: {
    addSymbol(symbolName, symbolPrice) {
        this.addedSymbols.push({
          name: symbolName,
          price: symbolPrice,
        });
      this.$emit("onAdd", { name: symbolName, price: symbolPrice });
    }
  }
};
</script>
