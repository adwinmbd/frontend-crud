<template>
    <form @submit.prevent="handleSubmit">
        <p class="grouped">
            <input v-model="newTodo.text" type="text" placeholder="Todo details ...">
            <span v-if="isEditing === false">
                <button class="button primary icon-only">
                    <img height="18" width="18" src="../assets/img/plus-icon.svg" />
                </button>
            </span>
            <span v-else>
                <button class="button icon-only">
                    <img height="18" width="18" src="../assets/img/edit-icon.svg" />
                </button>
            </span>
        </p>
    </form>
</template>
<script>
export default {
    name:'todo-form',
    props: {
        editedTodo: Object,
        editing: Boolean
    },
    data(){
        return{
            newTodo: { ...this.editedTodo },
            isEditing:this.editing
        }
    },
    watch: {
        editedTodo: {
            handler() {
                this.newTodo = { ...this.editedTodo };
            },
            deep: true
        },
        editing:{
            handler() {
                this.isEditing = this.editing;
            }
        }
    },
    methods:{
        handleSubmit() {
            this.$emit('add-todo', this.newTodo)
            this.newTodo = {}
        },
    }
}
</script>