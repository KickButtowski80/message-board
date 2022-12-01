<template>
  <div>
    <form @submit.prevent="sendMessage" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{ error }}</p>
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter a username"
          required
        />
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          v-model="message.subject"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter a subject"
          required
        />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          v-model="message.message"
          class="form-control"
          id="message"
          placeholder="Enter some message..."
          rows="3"
        ></textarea>
      </div>
      <!-- <div class="form-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.imageURL"
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image"
        />
      </div> -->
      <button type="submit" class="btn btn-primary">Add Message</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['sent-message'],
  data() {
    return {
      error: "",
      message: {
        username: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendMessage() {
      this.$emit("sent-message", this.message);
    },
  },
};
</script>

<style>
</style>