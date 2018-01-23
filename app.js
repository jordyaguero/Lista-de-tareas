let data = {
    title: 'Lista de tareas',
    tareas: [{
            name: 'Aprender node',
            checked: false
        },
        {
            name: 'Aprender css avanzando',
            checked: true
        }
    ],
    newTarea: ''
};

// declarando componentes
let ItemsComponent = Vue.extend({
    data() {
        return data;
    },
    template: `<ul class="list-group">
                <li class="list-group-item" v-for="(tarea, index) in tareas" :class="{'removed': tarea.checked}">
                    <div class="row">
                        <div class="col-sm-10">
                            <input type="checkbox" v-model="tarea.checked"> {{tarea.name}}
                        </div>

                        <span class="input-group-btn  col-sm-2  text-right">
                            <button class="btn  btn-danger" type="button" @click="eliminar(index)">Delete</button>
                        </span>
                    </div>
                </li>
            </ul>
        `,
    methods: {
        eliminar(tarea) {
            this.tareas.splice(tarea, 1);
        }
    }
});

let ChangeTitleComponent = Vue.extend({
    data() {
        return data;
    },
    template: '<input type="text" class="form-control" v-model="title">'
});

let AddItemsComponent = Vue.extend({
    data() {
        return data;
    },
    methods: {
        add() {
            let tarea = this.newTarea.trim();

            this.tareas.push({
                name: tarea,
                checked: false
            });
            this.newTarea = '';
        }
    },
    template: `
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Add List" v-model="newTarea" @keyup.enter="add()">
                <div class="input-group-append">
                    <button class="btn  btn-primary  btn-md" type="button" @click="add()">Add</button>
                </div>
            </div>
        `
});


Vue.component('items-component', ItemsComponent);
Vue.component('change-title-component', ChangeTitleComponent);
Vue.component('add-items-component', AddItemsComponent);

let app = new Vue({
    el: '#app',
    data: data,
});