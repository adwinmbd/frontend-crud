<template>
    <div v-if="todos.length===0">
        <Spinner></Spinner>
    </div>
    <table class="striped">
        <tbody>
            <tr :key="todo.id" v-for="todo in todos">
                <td>{{todo.text}}</td>
                <td class="pull-right">
                    <button class="button icon-only" @click="editMode(todo)">
                        <img height="18" width="18" src="../assets/img/edit-icon.svg" />
                    </button>
                    <button class="button error icon-only" @click="$emit('delete-todo', todo.id)">
                        <img height="18" width="18" src="../assets/img/trash-icon.svg" />
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {
    name:'todo-table',
    components: {
        Spinner,
    },
    emits: ['delete-todo', 'edit-todo'],
    props: {
        todos: Array,
    },
    methods:{
        editMode(todo){
           if (todo.text === '') return
           this.$emit('edit-todo', todo)
        }
    }
    
}
</script>