<template>
  <div class="app-form" style="padding:3rem; text-align: left;">
    <span>ข้อมูลที่จำเป็น</span>
    <el-form ref="form" :model="form" label-width="140px" :label-position="'top'">
      <el-form-item label="ดัชนีมวลกาย (BMI)">
        <el-input placeholder v-model="form.bmi">
          <template slot="append">
            kg/m
            <sup>2</sup>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="รอบเอวต่อรอบสะโพก (WHR)">
        <el-input placeholder v-model="form.whr">
          <template slot="append">cm/cm</template>
        </el-input>
      </el-form-item>
      <el-form-item label="AST">
        <el-input placeholder v-model="form.ast">
          <template slot="append">U/L</template>
        </el-input>
      </el-form-item>
      <el-form-item label="ALT">
        <el-input placeholder v-model="form.alt">
          <template slot="append">U/L</template>
        </el-input>
      </el-form-item>
      <el-form-item label="(T2DM)">
        <el-radio-group v-model="form.t2dm">
          <el-radio :label="true">ใช่</el-radio>
          <el-radio :label="false">ไม่</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Hemoglobin Atc (HbAtc)">
        <el-input placeholder v-model="form.hbatc">
          <template slot="append">CM</template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  // name: '',
  // components: {},
  // props:{},
  data() {
    return {
      form: {
        bmi: "",
        whr: "",
        ast: "",
        alt: "",
        t2dm: "",
        hbatc: ""
      }
    };
  }
  // computed: {},
  // watch: {},
  // created() {},
  // methods: {},
};
</script>
<style lang="scss" >
</style>
