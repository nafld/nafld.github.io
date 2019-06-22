<template>
  <div class="app-form-baseContainer">
    <div class="app-form-titleBox">
      <span>ข้อมูลทั่วไป</span>
    </div>
    <el-form class="app-form" ref="form" :model="form" label-width="150px" :label-position="'top'">
      <el-form-item label="ชื่อ-สกุล">
        <div style="display:flex">
          <el-input v-model="form.firstname" placeholder="ชื่อ"></el-input>
          <el-input v-model="form.lastname" placeholder="สกุล"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="เพศ">
        <el-radio-group v-model="form.gender">
          <el-radio border label="male">ชาย</el-radio>
          <el-radio border label="female">หญิง</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="อายุ">
        <el-input placeholder v-model="form.age">
          <template slot="append">year</template>
        </el-input>
      </el-form-item>
      <el-form-item label="น้ำหนัก">
        <el-input placeholder v-model="form.weight">
          <template slot="append">kg</template>
        </el-input>
      </el-form-item>
      <el-form-item label="ส่วนสูง">
        <el-input placeholder v-model="form.height">
          <template slot="append">cm</template>
        </el-input>
      </el-form-item>
      <el-form-item label="สูบบุหรี่อยู่">
        <el-radio-group v-model="form.smokes">
          <el-radio border :label="true">ใช่</el-radio>
          <el-radio border :label="false">ไม่</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>

    <div class="app-form-titleBox">
      <span>ข้อมูลที่จำเป็น</span>
    </div>
    <el-form class="app-form" ref="form" :model="form" label-width="150px" :label-position="'top'">
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
      <el-form-item label="เป็นโรคเบาหวาน (T2DM)">
        <el-radio-group v-model="form.t2dm">
          <el-radio border :label="true">เป็น</el-radio>
          <el-radio border :label="false">ไม่เป็น</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Hemoglobin Atc (HbAtc)">
        <el-input placeholder v-model="form.hbatc">
          <template slot="append">CM</template>
        </el-input>
      </el-form-item>
    </el-form>

    <div>
      <el-button type="primary">แสดงผล</el-button>
    </div>
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
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        weight: "",
        height: "",
        smokes: "",

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
<style lang="scss">
.app-form-titleBox {
  margin-top: 3rem;
  margin-bottom: 30px;
  border-bottom: 2px solid #3f7712;
}
.app-form-baseContainer {
  padding: 0 3rem 3rem 3rem;
  text-align: left;
}
.app-form.el-form .el-form-item__label {
  padding-bottom: 5px;
  width: 100%;
  line-height: 20px;
}
.app-form.el-form .el-form-item__content {
  text-align: left;
}
</style>
