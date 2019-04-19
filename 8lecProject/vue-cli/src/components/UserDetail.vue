<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ myName }}</p>
        <p>Reverse Name: {{ reverseName() }}</p>
        <p>Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFun()">Reset Name</button>
    </div>
</template>

<script>

    import { eventBus } from '../main';
    export default {
        //props: ['myName'],// Get data from parent
        props: {// props can also be a object
            myName: {
              type: String,
              required: true
            },
            resetFun: Function,// execute function of parent to the child through props
            userAge: Number
        },
        methods: {
            reverseName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Sabbir';
                this.$emit('nameWasReset', this.myName);// custom event
            }
        },
        created() {
          eventBus.$on( 'ageWasEdited', (Age) => {
            this.userAge = Age;
          } );// for staring the bus
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
