<template>
<div>
    <Tutorial />
    <UserLogin />
</div>
</template>

<script>
  import UserLogin from '../components/UserLogin.vue'
  export default {
    name: 'IndexPage',
    componets: { UserLogin }
  }
</script>