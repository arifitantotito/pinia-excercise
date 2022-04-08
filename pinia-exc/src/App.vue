<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default {};
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 nopadding col-xl-2 bg-color min-vh-100">
        <ul class="nav flex-column bg-color fw-bold">
          <li class="gpp nav-item fw-bold fs-1 p-3 m-auto text-white">GPP</li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white py-3" aria-current="page" to="/">
              <i class="fa-solid fa-chart-line me-2"></i>Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white py-3"
              aria-current="page"
              to="/todo"
            >
              <i class="fa-solid fa-rocket me-2"></i>Todo List
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white py-3"
              aria-current="page"
              to="/user"
            >
              <i class="fa-solid fa-briefcase me-2"></i>Users
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white py-3"
              aria-current="page"
              to="/login"
            >
              <i class="fa-solid fa-business-time me-2"></i>Login
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="col-10">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
.gpp {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
}
.bg-color {
  background-color: #1A2B45;
  color: black;
}
.bg-color a:hover {
  background-color: white;
  color: black !important;
  border-top-right-radius: 5%;
}
.nopadding {
  padding: 0 !important;
}
a.active {
  background-color: white;
  color: black !important;
  border-top-right-radius: 5%;
}
</style>