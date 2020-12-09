<template>
    <div id="todo-table">
        <div v-if="todos.length===0">
            <Spinner></Spinner>
        </div>
        <div>
            <table class="table is-hoverable is-fullwidth is-striped">
                <tbody>
                    <tr :key="todo.id" v-for="todo in todos">
                        <td>{{todo.text}}</td>
                        <td class="has-text-right">
                            <button
                                class="button is-text is-small is-warning"
                                @click="editMode(todo)"
                            >
                                <span class="icon">
                                <img height="32" width="32" src="../assets/img/edit-icon.svg" />
                                </span>
                            </button>
                            <button
                                class="button is-text is-small is-danger"
                                @click="$emit('delete-todo', todo.id)"
                            >
                                <span class="icon">
                                <img height="32" width="32" src="../assets/img/trash-icon.svg" />
                                </span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Spinner from "./Spinner.vue";
export default {

    name:'todo-table',
    components: {
        Spinner,
    },
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