<template>
  <div>
    {{ $t('login.username') }}
    {{ $t('login.password') }}
    {{ $t('login.confirmPassword') }}
    <button @click="$emit('close')">
      <!-- {{ $t('login.signUp') }} -->
      close
    </button>
  </div>
</template>

<script>
export default {
   name:'Modal',
};
</script>

