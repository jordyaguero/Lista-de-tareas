let app = new Vue({
    el: '#app',
    data: {
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
    },
    methods: {
        add() {
            let tarea = this.newTarea.trim();

            this.tareas.push({
                name: tarea,
                checked: false
            });
            this.newTarea = '';
        },
        eliminar(tarea) {
            this.tareas.splice(tarea, 1);
        }
    }
});