<template>
  <div>
    <Row :gutter="16">
      <Col :md="24" :lg="8">
        <card :header="true" title="Personal">
          <Row>
            <Col :xs="10" :md="10">
              <b>Name</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.name }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>Username</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.username }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>Email</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.email }}</Col>
          </Row>
        </card>
      </Col>
      <Col :md="24" :lg="8">
        <card :header="true" title="Address">
          <Row>
            <Col :xs="10" :md="10">
              <b>Street</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.address.street }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>Suite</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.address.suite }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>City</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.address.city }}</Col>
          </Row>
        </card>
      </Col>
      <Col :md="24" :lg="8">
        <card :header="true" title="Company">
          <Row>
            <Col :xs="10" :md="10">
              <b>Name</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.company.name }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>CatchPhrase</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.company.catchPhrase }}</Col>
          </Row>
          <Row>
            <Col :xs="10" :md="10">
              <b>BS</b>
            </Col>
            <Col :xs="4" :md="4">
              <b>:</b>
            </Col>
            <Col :xs="10" :md="10">{{ userDetail.company.bs }}</Col>
          </Row>
        </card>
      </Col>
    </Row>
    <Spin size="large" fix v-if="loading"></Spin>
  </div>
</template>

<script>
import Card from "./../../../components/Card.vue";
import UserService from "./../../../service/api";

export default {
  components: {
    Card
  },
  data() {
    return {
      loading: false,
      userDetail: {
        address: {},
        company: {}
      }
    };
  },
  created() {
    this.getUserDetail();
  },
  methods: {
    async getUserDetail() {
      this.loading = true;
      try {
        const response = await UserService.getDetailUser(this.$route.params.id);
        if (response) {
          this.userDetail = response[0];
        }
      } catch (error) {
        this.$Modal.error({
          title: "Error!",
          content: `Something when wrong, failed to get data Detail User. Please Try Again!`
        });
      }
      this.loading = false;
    }
  }
};
</script>

<style>
</style>