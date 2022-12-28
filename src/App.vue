<template>
  <div class="*hstack flex-wrap gap-4 p-2">
    <el-button disabled>Default</el-button>
    <el-button type="primary" disabled>Primary</el-button>
    <el-button type="success" disabled>Success</el-button>
    <el-button type="info" disabled>Info</el-button>
    <el-button type="warning" disabled>Warning</el-button>
    <el-button type="danger" disabled>Danger</el-button>
  </div>

  <div class="*hstack flex-wrap gap-4 p-2">
    <el-badge :value="12" class="item">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button>replies</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button>comments</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button>replies</el-button>
    </el-badge>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
