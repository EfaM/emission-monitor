<script setup>
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLanguage as languageIcon } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="container">
    <div class="row justify-content-between my-2">
      <!--Logo-->
      <div class="col-4 text-start">
        <RouterLink to="/" class="navbar-brand">
          <img src="@/assets/navlogo.png" alt="SGO Logo" height="40" />
        </RouterLink>
      </div>

      <!--Sprachauswahl-->
      <div class="col-4 text-end">
        <ul class="navbar-nav ms-lg-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="navbar-text">
                <FontAwesomeIcon :icon="languageIcon" />
              </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="#">DE</a></li>
              <li><a class="dropdown-item" href="#">ENG</a></li>
              <li><a class="dropdown-item" href="#">AR</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
