<template>
	<div> asd页面 </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: Asd
meta:
  requiresAuth: true
  title: 测试页面

props:
  id: $route.params.id
  isSub: $route.query.isSub === "y"
  isAudit: $route.query.isAudit === "y"
</route>
