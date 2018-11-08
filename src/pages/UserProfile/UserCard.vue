<template>
  <card class="card-user">
    <div>
    </br></br>
      <div class="author">
        <i class="icon-success ti-twitter-alt ti-5x" style="height: 100%;"></i>
        <h4 class="title">Chet Faker
          <br>
          <a href="#">
            <small>@chetfaker</small>
          </a>
        </h4>
      </div>
      <p class="description text-center">
        "I like the way you work it
        <br> No diggity
        <br> I wanna bag it up"
      </p>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    getClasses(index) {
      var remainder = index % 3;
      if (remainder === 0) {
        return "col-lg-3 offset-lg-1";
      } else if (remainder === 2) {
        return "col-lg-4";
      } else {
        return "col-lg-3";
      }
    }
  }
};
</script>
<style>
</style>
