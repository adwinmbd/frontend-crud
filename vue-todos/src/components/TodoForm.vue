<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="field has-addons has-addons-centered">
              <div class="control">
                <input v-model="newTodo.text" class="input" type="text" placeholder="Todo details ..." />
              </div>
              <div class="control">
                <span v-if="isEditing === false">
                    <button class="button is-primary">
                        <span class="icon is-small">
                        <img height="32" width="32" src="../assets/img/plus-icon.svg" />
                        </span>
                    </button>
                </span>
                <span v-else>
                    <button class="button is-warning">
                        <span class="icon is-small">
                        <img height="32" width="32" src="../assets/img/edit-icon.svg" />
                        </span>
                    </button>
                </span>
              </div>
            </div>
          </form>
    </div>
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