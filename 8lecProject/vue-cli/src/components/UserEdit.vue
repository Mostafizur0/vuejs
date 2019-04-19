<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Age: {{ userAge }}</p>
        <button @click="editAge">Edit age</button>
        <button @click="editAgeWithBus">Edit age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
      props: ['userAge'],
      methods: {
        editAge() {
          this.userAge= 30;
          this.$emit('ageWasEdited', this.userAge);// Set event trigger
        },
        editAgeWithBus() {
          this.userAge= 30;
          eventBus.$emit('ageWasEdited', this.userAge);// Set event trigger
        }
      }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
