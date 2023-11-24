<template>
    <div class="ddnet-view-profile">
        <ViewInstructionComponent>{{ $t("sidebar.userProfileItem.title") }}</ViewInstructionComponent>
        <section class="main">
            <ProfileCardComponent />
            <DateDurationLineChartComponentVue />
        </section>
        <BaseSectionPlaneComponent title="打卡记录" />
        <FooterComponentVue />
        <DebugComponentVue />
    </div>
</template>

<script setup lang="ts">
import ViewInstructionComponent from "@/components/BaseViewInstructionComponent.vue";
import ProfileCardComponent from "@/components/TheProfileCardComponent.vue";
import FooterComponentVue from "@/components/BaseFooterComponent.vue";
import DebugComponentVue from "@/components/__debugC__/DebugComponent.vue";
import DateDurationLineChartComponentVue from "@/components/TheDateDurationLineChartComponent.vue";
import BaseSectionPlaneComponent from "@/components/BaseSectionPlaneComponent.vue";
</script>

<style lang="scss" scoped>
.ddnet-view-profile {
    width: 100%;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.ddnet-view-profile>.main {
    display: flex;
    flex-direction: row;
    gap: 20px;
}
</style>@/stores/user