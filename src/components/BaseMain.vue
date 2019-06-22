<template>
  <div class="baseMain-baseContainer">
    <form-one></form-one>
    <!-- <form-two></form-two>
    <form-three></form-three>-->
  </div>
</template>

<script>
import FormOne from "@/components/FormOne.vue";
import FormTwo from "@/components/FormTwo.vue";
import FormThree from "@/components/FormThree.vue";
export default {
  name: "BaseMain",
  components: {
    FormOne,
    FormTwo,
    FormThree
  },
  props: {
    msg: String
  }
};
</script>
<style scoped>
.baseMain-baseContainer {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
