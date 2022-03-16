<template>
    <div>
        <button-click></button-click>
        <div class="col-12 border border-dark border border-5 rounded mt-5">
        <template v-for="(value, index) in values">
                    <symbol-list :value=value :key=index></symbol-list>
                </template>
        </div>
        
    </div>
</template>

<script>
import ButtonClick from '../components/ButtonClick.vue'
import SymbolList from '../components/SymbolList.vue';

export default {
    name: 'Home',
    components: {
        ButtonClick,
        SymbolList
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