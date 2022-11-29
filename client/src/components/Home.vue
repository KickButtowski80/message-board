<template>
  <div>
    <message-form @sent-message="gotMessage"></message-form>
    <hr />
    <div class="list-unstyled" v-for="message in messages" :key="message.id">
      <li class="media">
        <img
          v-if="message.imageURL"
          class="mr-3"
          :src="message.imageURL"
          :alt="message.subject"
        />
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{ message.username }}</h4>
          <h5 class="mt-0 mb-1">{{ message.subject }}</h5>
          {{ message.message }}
          <br />
          <small>{{ message.created }}</small>
        </div>
      </li>
      <hr />
    </div>
  </div>
</template>

<script>
import MessageForm from "./MessageForm.vue";
export default {
  components: { MessageForm },
  data() {
    return {
      messages: [],
      erro: "",
    };
  },
  mounted() {
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      const response = await fetch("http://localhost:4000/messages");
      this.messages = await response.json();
    },
    async gotMessage(message) {
      const response = await fetch("http://localhost:4000/messages", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      const result = await response.json();
      this.addMessage({created: result[0].created, ...message});
    },
    addMessage(message) {
      this.messages.unshift(message);
    },
  },
};
</script>

<style scoped>
small {
  color: red;
}
</style>