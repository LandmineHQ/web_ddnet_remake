<template>
    <div class="ddnet-card--profile">
        <div class="top-left">
            <div class="title">
                <span class="subtitle">profile</span>
                <span class="date">{{ useUserInfoStore().date }}</span>
            </div>
            <div class="subtitle">
                <div class="skin">
                    <canvas ref="skinCanvas"></canvas>
                </div>
                <div class="name">{{ useUserInfoStore().name }}</div>
                <div class="countryIcon">
                    <img :src="`./src/assets/countryflags/${useUserInfoStore().country}.png`" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="top-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="168" height="168" viewBox="0 0 168 168" fill="none">
                <g filter="url(#filter0_di_602_133353)">
                    <path
                        d="M84.0011 6.99994C101.383 6.99994 118.194 13.2019 131.411 24.4903C144.628 35.7787 153.383 51.4127 156.102 68.5803C158.821 85.7478 155.326 103.322 146.244 118.142C137.162 132.963 123.09 144.056 106.559 149.427C90.0284 154.798 72.1235 154.095 56.0651 147.443C40.0067 140.791 26.8486 128.628 18.9576 113.141C11.0665 97.6541 8.96046 79.8596 13.0181 62.9583C17.0758 46.057 27.0309 31.1582 41.0929 20.9416"
                        stroke="url(#paint0_linear_602_133353)" stroke-width="14" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_di_602_133353" x="0.000976562" y="-6.10352e-05" width="168" height="168"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_602_133353" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_602_133353" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dx="1" dy="1" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_602_133353" />
                    </filter>
                    <linearGradient id="paint0_linear_602_133353" x1="164" y1="-1.14481e-05" x2="4.00012" y2="160"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#227FB4" />
                        <stop offset="1" stop-color="#4F927A" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="score">SSS</div>
            <div class="points">{{ Math.floor(cardProperties.progress.points.now / 1000) }}k</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <g filter="url(#filter0_d_616_39267)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.5 6.5V14.5C21.5 16.7091 19.7091 18.5 17.5 18.5H9.5C7.29086 18.5 5.5 16.7091 5.5 14.5V6.5C5.5 4.29086 7.29086 2.5 9.5 2.5H17.5C19.7091 2.5 21.5 4.29086 21.5 6.5ZM7 6.5V14.5C7 15.163 7.26339 15.7989 7.73223 16.2678C8.20107 16.7366 8.83696 17 9.5 17H17.5C18.8807 17 20 15.8807 20 14.5V6.5C20 5.11929 18.8807 4 17.5 4H9.5C8.11929 4 7 5.11929 7 6.5Z"
                        fill="#06091D" />
                    <path
                        d="M24.5 8.75C24.088 8.75539 23.7554 9.08804 23.75 9.5V17.5C23.7445 19.2926 22.2926 20.7445 20.5 20.75H12.5C12.0858 20.75 11.75 21.0858 11.75 21.5C11.75 21.9142 12.0858 22.25 12.5 22.25H20.5C23.1234 22.25 25.25 20.1234 25.25 17.5V9.5C25.2446 9.08804 24.912 8.75539 24.5 8.75Z"
                        fill="#06091D" />
                </g>
                <defs>
                    <filter id="filter0_d_616_39267" x="0.5" y="0.5" width="27.75" height="27.75"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset dx="-1" dy="2" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_616_39267" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_616_39267" result="shape" />
                    </filter>
                </defs>
            </svg>
            <svg width="36" height="21" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M28.5 1H20.5V2H13.5V1H5.5C4.3 1 2.66667 2.66667 2 3.5L1 7.5V12C1 13.5 1.5 16 2 17C2.4 17.8 4.5 19 5.5 19.5H13.5V18.5H20.5V19.5H29C32.2 18.3 34.5 13 34.5 10.5C35.3 6.5 31 1 28.5 1Z"
                    fill="#EB0A14" />
                <path
                    d="M28.5 1H20.5V2H13.5V1H5.5C4.3 1 2.66667 2.66667 2 3.5L1 7.5V12C1 13.5 1.5 16 2 17C2.4 17.8 4.5 19 5.5 19.5H13.5V18.5H20.5V19.5H29C32.2 18.3 34.5 13 34.5 10.5C35.3 6.5 31 1 28.5 1Z"
                    fill="url(#paint0_linear_630_75592)" />
                <path
                    d="M28.5 1H20.5V2H13.5V1H5.5C4.3 1 2.66667 2.66667 2 3.5L1 7.5V12C1 13.5 1.5 16 2 17C2.4 17.8 4.5 19 5.5 19.5H13.5V18.5H20.5V19.5H29C32.2 18.3 34.5 13 34.5 10.5C35.3 6.5 31 1 28.5 1Z"
                    stroke="black" stroke-width="2" />
                <path
                    d="M1.5 9.49999C1.5 8.99999 2 5 2 5C3.05278 4.98847 3.50733 5.69209 4 6.49999V13C3.57283 13.7484 3.11767 14.0737 2 14.5C2 14.5 1.5 9.99999 1.5 9.49999Z"
                    fill="#9F6C6C" />
                <path
                    d="M1.99997 14C2.8333 15.3333 6.29994 17.5 13.4999 13.5V15.5C19.0999 13.5 20.4999 12.3334 20.4999 12V9.00002C23.4999 5.50002 29 10.5 33 13C30.7131 18.0678 29.9541 18.3325 29 18.5H20.4999H13.4999H13H5.49997C4.16664 18.1667 1.59997 16.8 1.99997 14Z"
                    fill="#BB151B" />
                <path
                    d="M1.5 5C2.33333 5.16667 4 5.7 4 6.5C4 7.3 4 11.1667 4 13C3.2 14.2 2 14.5 1.5 14.5M13.5 2V19M20.5 2V19M13 19V18H21V19H13Z"
                    stroke="black" />
                <defs>
                    <linearGradient id="paint0_linear_630_75592" x1="13.5" y1="9" x2="21" y2="9"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D9D9D9" stop-opacity="0" />
                        <stop offset="0.0001" stop-color="#D9D9D9" />
                        <stop offset="0.9999" stop-color="#D9D9D9" />
                        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        <div class="middle">
            <div class="progress1">
                <div class="rect" :style="{
                    background: `radial-gradient(circle at left, #44ACBF 0%, #44ACBF ${cardProperties.progress.map.finished / cardProperties.progress.map.total * 100 - 3}%, rgba(255, 255, 255, 0.00) ${cardProperties.progress.map.finished / cardProperties.progress.map.total * 100}%), #36537E`
                }">
                </div>
                <div class="title">{{ $t("components.profile_card_component.progress.title1") }}</div>
                <div class="subtitle">{{ `${cardProperties.progress.map.finished.toFixed(0)} /
                                    ${cardProperties.progress.map.total.toFixed(0)}` }}
                </div>
            </div>
            <div class="progress2">
                <div class="rect" :style="{
                    background: `radial-gradient(circle at left, #44ACBF 0%, #44ACBF ${cardProperties.progress.points.now / cardProperties.progress.points.total * 100 - 3}%, rgba(255, 255, 255, 0.00) ${cardProperties.progress.points.now / cardProperties.progress.points.total * 100}%), #36537E`
                }">
                </div>
                <div class="title">{{ $t("components.profile_card_component.progress.title2") }}</div>
                <div class="subtitle">{{ `${Math.floor(cardProperties.progress.points.now)} /
                                    ${Math.floor(cardProperties.progress.points.total)}` }}</div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <div class="regionRank">
                    <div class="title">
                        <div class="title-main">{{ $t("components.profile_card_component.points_rank.title") }}</div>
                        <div class="subtitle">{{ $t("components.profile_card_component.points_rank.subtitle") }}</div>
                    </div>
                    <div class="subtitle"># {{ Math.floor(cardProperties.pointsRank) }}</div>
                </div>
                <div class="rank">
                    <div class="title">
                        <div class="title-main">{{ $t("components.profile_card_component.rank") }}</div>
                    </div>
                    <div class="subtitle"># {{ Math.floor(cardProperties.rank) }}</div>
                </div>
            </div>
            <div class="right">
                <div class="mini-card" v-for="(item, index) in miniCards" :key="index">
                    <div class="title">{{ item.title }}</div>
                    <div class="subtitle">{{ item.content }}</div>
                </div>
            </div>
        </div>
        <div class="mask"></div>
    </div>
</template>

<script setup lang="ts">
import useUserInfoStore from '@/stores/user';
import { reactive, ref, computed, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

import { OnSVGRender, OnTeeSkinRender } from '@/tools/tee';
import { watch } from 'vue';
import gsap from 'gsap';
import router from '@/router';
// get computed card properties & autoupdate
const cardProperties = getCardProperties()
watch(() => useUserInfoStore().stamp, () => {
    console.log(router.currentRoute.value.name, `detected userinfo date stamp changed`)
    updateProfileCard(cardProperties, getCardProperties())
})
// format mini card properties
const miniCards = computed(() => {
    return [
        { title: t("components.profile_card_component.mini_card_title.title1"), content: Math.floor(cardProperties.miniCard.totalTimeOfFinishingMaps / 3600) + " h" },
        { title: t("components.profile_card_component.mini_card_title.title2"), content: Math.floor(cardProperties.miniCard.releaseSkins) },
        { title: t("components.profile_card_component.mini_card_title.title3"), content: Math.floor(cardProperties.miniCard.releaseMaps) },
        { title: t("components.profile_card_component.mini_card_title.title4"), content: Math.floor(cardProperties.miniCard.pph * 100) / 100 },
        { title: t("components.profile_card_component.mini_card_title.title5"), content: Math.floor(cardProperties.miniCard.top1) },
        { title: t("components.profile_card_component.mini_card_title.title6"), content: Math.floor(cardProperties.miniCard.top10) },
    ]
})

// the elements of the skin canvas,which is used to render the skin image
const skinCanvas = ref<HTMLCanvasElement>();

// reactive skin src
const img = new Image()
updateSkin(useUserInfoStore().skinSrcPath)
watch(() => useUserInfoStore().skinSrcPath, (value) => {
    updateSkin(value)
}, { deep: true })

defineExpose({
    cardProperties
})

// =================================================================
/**
 * getCardProperties
 * maybe have no need any documentation
 */
function getCardProperties() {
    let cardProperties = reactive({
        progress: {
            map: {
                finished: 0,
                total: 0
            },
            points: {
                now: 0,
                total: 0
            }
        },
        pointsRank: 0,
        rank: 0,
        miniCard: {
            totalTimeOfFinishingMaps: 0,
            releaseSkins: 0,
            releaseMaps: 0,
            pph: 0,
            top1: 0,
            top10: 0,
        }
    })
    const playersInfo = useUserInfoStore().playerInfo as PlayerInfo
    const mappersInfo = useUserInfoStore().mappersInfo as MappersData
    const authorInfo = useUserInfoStore().teedataAuthorInfo as TeeData_Author

    if (!playersInfo) return cardProperties
    // step 1: get progress.points & pointsRank
    cardProperties.progress.points.now = playersInfo.points ? playersInfo.points.points : 0
    cardProperties.progress.points.total = playersInfo.points ? playersInfo.points.total : 0
    cardProperties.pointsRank = playersInfo.points ? playersInfo.points.rank : 0
    // step 2: get rank
    cardProperties.rank = playersInfo.rank ? playersInfo.rank.rank : 0
    // step 3: get 
    // progress.map &
    // miniCard.totalTimeOfFinishingMaps &
    // miniCard.top1 & miniCard.top10
    {
        let totalMaps = 0;
        let totalTime = 0;
        let totalFinishedMaps = 0;
        let top1 = 0;
        let top10 = 0;
        for (let typeName in playersInfo.types) {
            let type = playersInfo.types[typeName as MapTypes]
            for (let mapName in type.maps) {
                totalMaps++;
                let mapItem: MapFinished = type.maps[mapName]
                if (mapItem.time) {
                    totalTime += mapItem.time
                    totalFinishedMaps++

                    let rank = mapItem.rank as number
                    if (rank <= 10) {
                        top10++
                        if (rank === 1) top1++
                    }
                }
            }
        }
        cardProperties.progress.map.total = totalMaps
        cardProperties.progress.map.finished = totalFinishedMaps
        cardProperties.miniCard.totalTimeOfFinishingMaps = totalTime
        cardProperties.miniCard.top1 = top1
        cardProperties.miniCard.top10 = top10
    }
    // step 4: get pph(points per hour)
    cardProperties.miniCard.pph = cardProperties.progress.points.now / (cardProperties.miniCard.totalTimeOfFinishingMaps / 3600)
    // step 5: get maps & skins
    let counts = 0
    if (mappersInfo.authors) counts = mappersInfo.authors[useUserInfoStore().name]?.total as number
    cardProperties.miniCard.releaseMaps = counts
    counts = 0
    for (let key in authorInfo) {
        const _count = authorInfo._count as { [key: string]: any }
        counts += _count[key]
    }
    cardProperties.miniCard.releaseSkins = counts
    return cardProperties
}

function updateSkin(res: string) {
    img.src = res

    if (res.includes("logo.svg")) {
        img.onload = () => {
            OnSVGRender(skinCanvas.value as HTMLCanvasElement, img, 113, 107)
        }
    } else {
        img.onload = () => {
            OnTeeSkinRender(skinCanvas.value as HTMLCanvasElement, img, 96, 64)
        }
    }
}

/**
 * use gsap to animate the update of profile cards
 * @param oldObj
 * @param newObj 
 */
function updateProfileCard(oldObj: { [key: string]: any }, newObj: typeof oldObj) {
    for (let key in oldObj) {
        if (!(key in newObj)) continue
        if (typeof oldObj[key] === "object") {
            updateProfileCard(oldObj[key], newObj[key])
            continue
        }
        gsap.to(oldObj, {
            [key]: newObj[key],
            duration: 2.5,
            ease: "elastic.out(1,0.4)",
        })
    }
}
</script>

<style lang="scss" scoped>
.ddnet-card--profile {
    width: 600px;
    height: 350px;
    flex-shrink: 0;
    position: relative;

    border-radius: 15px;
    background: linear-gradient(180deg, #385A8D 0%, #385A8D 54.55%, rgba(56, 90, 141, 0.70) 85.55%, rgba(56, 90, 141, 0.00) 100%), url("@/assets/background/card-profile-bg-1.png"), #385A8D;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);

    >* {
        position: absolute;
        text-wrap: nowrap;
    }
}

.ddnet-card--profile>.mask {
    width: 100%;
    height: 100%;
}

.ddnet-card--profile>.top-left {
    display: inline-flex;
    padding: 20px 28px 47px 40px;
    flex-direction: column;
    align-items: flex-start;

    >.title {
        display: flex;
        align-items: baseline;
        gap: 4px;

        >.subtitle {
            color: var(--BG-color-2, #FFF);
            font-family: Times New Roman;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.24px;
            text-transform: uppercase;
        }

        >.date {
            color: rgba(255, 255, 255, 0.60);
            font-family: Times New Roman;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.14px;
        }
    }

    >.subtitle {
        width: 299px;
        height: 80px;
        position: relative;

        >div {
            position: absolute;
        }

        >.skin {
            width: 80px;
            height: 80px;
            position: relative;

            display: flex;
            justify-content: center;
        }

        >.name {
            position: absolute;
            display: flex;
            width: 200px;
            height: 50px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            left: 88px;
            top: 7px;

            color: var(--Black, #000);
            font-family: Times New Roman;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.24px;
        }

        >.countryIcon {
            width: 64px;
            height: 32px;
            flex-shrink: 0;
            right: 0;
            top: 16px;

            >img {
                width: 100%;
                height: 100%;
                filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.25));
            }
        }
    }
}

.ddnet-card--profile>.top-right {
    top: 0;
    right: 0;
    width: 233px;
    height: 199px;
    flex-shrink: 0;

    >* {
        position: absolute;
    }

    >svg {
        &:nth-of-type(1) {
            width: 160px;
            height: 160px;
            flex-shrink: 0;
            top: 27px;
            right: 36px;

            stroke-width: 14px;
            stroke: #227FB4;
        }

        &:nth-of-type(2) {
            width: 24px;
            height: 24px;
            flex-shrink: 0;

            top: 12px;
            right: 12px;
        }

        &:nth-of-type(3) {
            width: 33.598px;
            height: 18.5px;
            flex-shrink: 0;
            top: 57px;
            right: 98.4px;
        }
    }

    >.score {
        display: flex;
        width: 90px;
        height: 90px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        top: 66px;
        right: 71px;

        color: var(--BG-color-2, #FFF);
        text-align: center;
        font-family: Times New Roman;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.4px;
    }

    >.points {
        display: flex;
        width: 25px;
        height: 16px;
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        top: 129px;
        right: 104px;

        color: rgba(255, 255, 255, 0.60);
        text-align: center;
        font-family: Times New Roman;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.16px;
    }
}

.ddnet-card--profile>.middle {
    width: 600px;
    height: 68px;
    flex-shrink: 0;
    top: 120px;

    >* {
        position: absolute;
    }

    >.progress1 {
        width: 600px;
        height: 60px;
        flex-shrink: 0;
        top: 4px;

        >* {
            position: absolute;
        }

        >.rect {
            top: 26px;
            left: 40px;
            width: 357px;
            height: 8px;
            flex-shrink: 0;

            border-radius: 4px;
            // background: radial-gradient(circle at left, #44ACBF 0%, #44ACBF 82.29%, rgba(255, 255, 255, 0.00) 86.46%), #36537E;
            box-shadow: 1px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        >.title {
            top: 5px;
            left: 40px;

            display: flex;
            width: 166px;
            height: 21px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;

            color: var(--BG-color-2, #FFF);
            font-family: Arial;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.16px;
        }

        >.subtitle {
            top: 2px;
            left: 206px;

            display: flex;
            width: 191px;
            height: 27px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;

            color: var(--BG-color-2, #FFF);
            text-align: right;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.14px;
        }
    }

    >.progress2 {
        width: 600px;
        height: 60px;
        flex-shrink: 0;
        top: 34px;

        >* {
            position: absolute;
        }

        >.rect {
            top: 26px;
            left: 40px;
            width: 357px;
            height: 8px;
            flex-shrink: 0;

            border-radius: 4px;
            // background: radial-gradient(circle at left, #44ACBF 0%, #44ACBF 82.29%, rgba(255, 255, 255, 0.00) 86.46%), #36537E;
            box-shadow: 1px 1px 1px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        >.title {
            top: 5px;
            left: 40px;

            display: flex;
            width: 166px;
            height: 21px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;

            color: var(--BG-color-2, #FFF);
            font-family: Arial;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.16px;
        }

        >.subtitle {
            top: 2px;
            left: 206px;

            display: flex;
            width: 191px;
            height: 27px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;

            color: var(--BG-color-2, #FFF);
            text-align: right;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.14px;
        }
    }
}

.ddnet-card--profile>.bottom {
    display: flex;
    width: 524px;
    height: 129px;
    align-items: center;
    flex-shrink: 0;

    top: 199px;
    left: 28px;

    >.left {
        display: flex;
        width: 245px;
        height: 129px;
        padding: 10px;
        align-items: center;
        margin-left: 10px;

        >* {
            width: 122px;
            height: 54px;
            flex-shrink: 0;
        }

        >.regionRank,
        >.rank {
            >.title {
                display: flex;
                flex-direction: row;
                gap: 4px;
                align-items: center;

                >.title-main {
                    color: var(--BG-color-2, #FFF);
                    font-family: Arial;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 0.16px;
                }

                >.subtitle {
                    color: var(--BG-color-2, #FFF);
                    font-family: Arial;
                    font-size: 10px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 0.1px;
                }
            }

            >.subtitle {
                display: flex;
                width: 122px;
                height: 39px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;

                color: var(--BG-color-2, #FFF);
                font-family: Times New Roman;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.32px;
            }
        }
    }

    >.right {
        display: flex;
        width: 279px;
        height: 129px;
        padding: 0px 10px;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        row-gap: 10px;
        flex-shrink: 0;
        flex-wrap: wrap;

        >.mini-card {
            display: flex;
            width: 81px;
            height: 44px;
            min-height: 40px;
            max-height: 44px;
            padding: 4px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 5px;
            background: #546E95;
            box-shadow: -1px 3px 0px 0px rgba(0, 0, 0, 0.25);

            >.title {
                display: flex;
                width: 69px;
                height: 16px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;

                color: var(--BG-color-2, #FFF);
                text-align: right;
                font-family: Arial;
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.1px;
            }

            >.subtitle {
                display: flex;
                width: 69px;
                height: 16px;
                flex-direction: column;
                justify-content: center;
                flex-shrink: 0;

                color: var(--BG-color-2, #FFF);
                text-align: right;
                font-family: Arial;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.14px;
            }
        }
    }
}
</style>@/axios/Mappers