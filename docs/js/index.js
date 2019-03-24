const HelloWorld = {
    template:
    `
    <div>
        <p>Hellow, World</p>
    </div>
    `
}

const SelectedDrink = {
    template:
    `
    <div id="selected-drink">
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option v-for="item in drink" @key="item">{{ item }}</option>
        </select>
        <span>選ばれたのは: {{ selected }}</span>
    </div>
    `,
    data: function() {
        return {
            selected: '',
            drink: ['綾鷹', '伊右衛門', '爽健美茶']
        }
    },
}

new Vue({
    el: '#app',
    components: {
        'selected-drink': SelectedDrink
    }
})